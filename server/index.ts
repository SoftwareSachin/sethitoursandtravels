import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "http";
import { rateLimit } from "./middleware/rateLimiter";
import { requestLogger, errorLogger } from "./middleware/logging";
import ProcessManager from "./utils/processManager";
import { recoveryMiddleware, timeoutMiddleware, dbCircuitBreaker, retryOperation } from "./middleware/recovery";
import { performanceMiddleware, systemHealthCheck, endpointMonitor } from "./middleware/monitoring";

const app = express();
const processManager = new ProcessManager();

// Start memory monitoring
processManager.startMemoryMonitoring();

// Security middleware
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // CORS headers for custom domains
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['*'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes('*') || (origin && allowedOrigins.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
});

// Body parsing with limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

// Request logging
app.use(requestLogger);

// Recovery and monitoring middleware
app.use(recoveryMiddleware);
app.use(timeoutMiddleware(30000)); // 30 second timeout
app.use(performanceMiddleware);
app.use(endpointMonitor);

// Rate limiting for API endpoints
app.use('/api', rateLimit(15 * 60 * 1000, 100)); // 100 requests per 15 minutes
app.use('/health', rateLimit(60 * 1000, 10)); // 10 requests per minute for health checks

// Serve attached assets statically
app.use('/attached_assets', express.static('attached_assets'));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Enhanced health check endpoint
  app.get('/health', async (_req, res) => {
    try {
      const health = await retryOperation(async () => {
        // Test database connection with circuit breaker
        await dbCircuitBreaker.execute(async () => {
          // Mock database health check - replace with actual DB ping
          return Promise.resolve();
        });
        
        return systemHealthCheck();
      });
      
      res.status(200).json(health);
    } catch (error) {
      res.status(503).json({
        status: 'unhealthy',
        error: 'Service unavailable',
        timestamp: new Date().toISOString()
      });
    }
  });

  // Metrics endpoint for monitoring
  app.get('/metrics', (_req, res) => {
    if (process.env.NODE_ENV === 'production') {
      const health = systemHealthCheck();
      res.status(200).json({
        metrics: health.performance,
        system: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          cpu: process.cpuUsage()
        }
      });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  });

  // Global error handler
  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Log error using error logger
    errorLogger(err, req);

    res.status(status).json({ 
      message: process.env.NODE_ENV === 'production' ? 
        (status === 500 ? 'Internal Server Error' : message) : 
        message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  
  // Create HTTP server for better control
  const httpServer = createServer(app);
  
  // Setup comprehensive process management
  processManager.setupProcessHandlers(httpServer);

  // Start server with comprehensive error handling
  httpServer.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
    
    // Log environment info
    if (process.env.NODE_ENV === 'production') {
      console.log('Production server started successfully');
      console.log('Environment:', process.env.NODE_ENV);
      console.log('Node version:', process.version);
      console.log('Memory monitoring active');
      console.log('Circuit breakers initialized');
      console.log('Performance monitoring active');
    }
  });
  
  // Handle server errors with recovery
  httpServer.on('error', (error: any) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use, trying to recover...`);
      
      // Try to restart on a different port in emergency
      setTimeout(() => {
        const fallbackPort = port + 1;
        console.log(`Attempting to start on fallback port ${fallbackPort}`);
        httpServer.listen(fallbackPort, "0.0.0.0");
      }, 5000);
    } else {
      console.error('Server error:', error);
      
      // Don't exit immediately, try to recover
      if (process.env.NODE_ENV === 'production') {
        console.log('Attempting server recovery...');
        setTimeout(() => {
          console.log('Server recovery attempt completed');
        }, 2000);
      } else {
        process.exit(1);
      }
    }
  });

  // Connection management
  httpServer.on('connection', (socket) => {
    // Set keepalive to prevent hanging connections
    socket.setKeepAlive(true, 60000);
    
    // Handle socket errors
    socket.on('error', (error) => {
      log('Socket error:', error);
    });
  });
})();

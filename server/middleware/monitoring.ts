import { Request, Response, NextFunction } from 'express';
import { log } from '../vite';

// Performance monitoring
class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  private readonly maxMetrics = 100;

  recordMetric(name: string, value: number) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const values = this.metrics.get(name)!;
    values.push(value);
    
    // Keep only the last N metrics
    if (values.length > this.maxMetrics) {
      values.shift();
    }
  }

  getMetrics(name: string) {
    const values = this.metrics.get(name) || [];
    if (values.length === 0) return null;

    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);

    return { avg, min, max, count: values.length };
  }

  getAllMetrics() {
    const result: Record<string, any> = {};
    for (const [name, values] of this.metrics.entries()) {
      result[name] = this.getMetrics(name);
    }
    return result;
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Request performance monitoring middleware
export const performanceMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const route = req.route?.path || req.path;
    
    // Record metrics
    performanceMonitor.recordMetric(`${req.method}_${route}`, duration);
    performanceMonitor.recordMetric('overall_response_time', duration);
    
    // Log slow requests
    if (duration > 5000) {
      log(`Slow request detected: ${req.method} ${req.path} took ${duration}ms`);
    }
  });

  next();
};

// System health monitoring
export const systemHealthCheck = () => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    cpu: process.cpuUsage(),
    version: process.version,
    loadAverage: process.platform === 'linux' ? require('os').loadavg() : null,
    performance: performanceMonitor.getAllMetrics()
  };

  // Check memory usage
  const memoryUsage = process.memoryUsage();
  const memoryThreshold = 1024 * 1024 * 1024; // 1GB
  
  if (memoryUsage.heapUsed > memoryThreshold) {
    health.status = 'warning';
  }

  // Check if we have too many slow requests
  const overallMetrics = performanceMonitor.getMetrics('overall_response_time');
  if (overallMetrics && overallMetrics.avg > 2000) {
    health.status = 'warning';
  }

  return health;
};

// Endpoint monitoring
export const endpointMonitor = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  // Track concurrent requests
  const concurrentKey = `concurrent_${req.path}`;
  performanceMonitor.recordMetric(concurrentKey, 1);
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    
    // Track response codes
    performanceMonitor.recordMetric(`status_${res.statusCode}`, 1);
    
    // Track endpoint usage
    performanceMonitor.recordMetric(`endpoint_${req.path}`, 1);
    
    // Remove from concurrent tracking
    performanceMonitor.recordMetric(concurrentKey, -1);
  });

  next();
};
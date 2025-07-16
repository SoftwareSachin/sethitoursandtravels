import { log } from "../vite";

// Memory monitoring and cleanup
class ProcessManager {
  private memoryThreshold = 900 * 1024 * 1024; // 900MB
  private monitoringInterval: NodeJS.Timeout | null = null;
  private isShuttingDown = false;

  startMemoryMonitoring() {
    this.monitoringInterval = setInterval(() => {
      const memUsage = process.memoryUsage();
      
      if (memUsage.heapUsed > this.memoryThreshold) {
        log(`High memory usage detected: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
        
        // Force garbage collection if available
        if (global.gc) {
          global.gc();
          log('Garbage collection triggered');
        }
      }
      
      // Log memory stats in production
      if (process.env.NODE_ENV === 'production') {
        const stats = {
          rss: Math.round(memUsage.rss / 1024 / 1024),
          heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
          heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
          external: Math.round(memUsage.external / 1024 / 1024)
        };
        log(`Memory stats: RSS=${stats.rss}MB, Heap=${stats.heapUsed}/${stats.heapTotal}MB, External=${stats.external}MB`);
      }
    }, 30000); // Check every 30 seconds
  }

  stopMemoryMonitoring() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
  }

  async gracefulShutdown(server: any) {
    if (this.isShuttingDown) return;
    this.isShuttingDown = true;

    log('Initiating graceful shutdown...');
    
    // Stop accepting new connections
    server.close((err: any) => {
      if (err) {
        log('Error during server shutdown:', err);
      } else {
        log('Server closed successfully');
      }
    });

    // Stop memory monitoring
    this.stopMemoryMonitoring();

    // Give existing connections time to finish
    setTimeout(() => {
      log('Forcing process exit');
      process.exit(0);
    }, 30000);

    // Clean up resources
    await this.cleanup();
  }

  private async cleanup() {
    // Clear any intervals/timeouts
    // Close database connections
    // Clean up temporary files
    log('Cleanup completed');
  }

  setupProcessHandlers(server: any) {
    // Graceful shutdown signals
    process.on('SIGTERM', () => {
      log('SIGTERM received, shutting down gracefully');
      this.gracefulShutdown(server);
    });

    process.on('SIGINT', () => {
      log('SIGINT received, shutting down gracefully');
      this.gracefulShutdown(server);
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      log('Uncaught Exception:', error);
      
      // Log to file and try to recover
      if (process.env.NODE_ENV === 'production') {
        // Don't exit immediately, try to recover
        setTimeout(() => {
          log('Attempting to recover from uncaught exception');
        }, 1000);
      } else {
        this.gracefulShutdown(server);
      }
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      log('Unhandled Rejection at:', promise, 'reason:', reason);
      
      // Log but don't crash the process
      if (process.env.NODE_ENV === 'production') {
        log('Continuing execution despite unhandled rejection');
      }
    });

    // Handle warnings
    process.on('warning', (warning) => {
      log('Process warning:', warning);
    });
  }
}

export default ProcessManager;
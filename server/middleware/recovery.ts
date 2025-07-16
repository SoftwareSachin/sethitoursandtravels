import { Request, Response, NextFunction } from 'express';
import { log } from '../vite';

// Circuit breaker pattern for external dependencies
class CircuitBreaker {
  private failureCount = 0;
  private lastFailureTime: number = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private readonly threshold: number;
  private readonly timeout: number;

  constructor(threshold = 5, timeout = 60000) {
    this.threshold = threshold;
    this.timeout = timeout;
  }

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  private onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      log(`Circuit breaker opened after ${this.failureCount} failures`);
    }
  }
}

// Global circuit breaker instances
export const dbCircuitBreaker = new CircuitBreaker(3, 30000);
export const externalApiCircuitBreaker = new CircuitBreaker(5, 60000);

// Auto-recovery middleware
export const recoveryMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const originalSend = res.send;
  
  res.send = function(data: any) {
    try {
      return originalSend.call(this, data);
    } catch (error) {
      log('Error in response sending, attempting recovery:', error);
      
      // Try to send a basic error response
      if (!res.headersSent) {
        res.status(500).json({
          error: 'Internal server error',
          message: 'The server encountered an error but is attempting to recover'
        });
      }
      
      return this;
    }
  };

  next();
};

// Request timeout middleware
export const timeoutMiddleware = (timeout = 30000) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const timer = setTimeout(() => {
      if (!res.headersSent) {
        res.status(408).json({
          error: 'Request timeout',
          message: 'The request took too long to process'
        });
      }
    }, timeout);

    res.on('finish', () => {
      clearTimeout(timer);
    });

    next();
  };
};

// Connection pooling and retry logic
export const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      log(`Operation failed, attempt ${attempt}/${maxRetries}:`, error);
      
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay * attempt));
      }
    }
  }

  throw lastError!;
};
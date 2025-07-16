import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

// Ensure logs directory exists
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const timestamp = new Date().toISOString();
  
  // Log request
  const logData = {
    timestamp,
    method: req.method,
    url: req.url,
    ip: req.ip || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    referer: req.headers.referer
  };
  
  // Original res.end to capture response
  const originalEnd = res.end;
  res.end = function(chunk?: any, encoding?: any) {
    const duration = Date.now() - start;
    const responseLog = {
      ...logData,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      contentLength: res.getHeader('content-length') || 0
    };
    
    // Write to access log file in production
    if (process.env.NODE_ENV === 'production') {
      const logLine = JSON.stringify(responseLog) + '\n';
      fs.appendFile(path.join(logsDir, 'access.log'), logLine, (err) => {
        if (err) console.error('Failed to write access log:', err);
      });
    }
    
    // Call original end
    originalEnd.call(this, chunk, encoding);
  };
  
  next();
};

export const errorLogger = (error: Error, req: Request) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name
    },
    request: {
      method: req.method,
      url: req.url,
      ip: req.ip || req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    }
  };
  
  // Write to error log file in production
  if (process.env.NODE_ENV === 'production') {
    const logLine = JSON.stringify(errorLog) + '\n';
    fs.appendFile(path.join(logsDir, 'error.log'), logLine, (err) => {
      if (err) console.error('Failed to write error log:', err);
    });
  }
  
  console.error('Application Error:', errorLog);
};
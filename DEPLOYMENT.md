# Production Deployment Guide

## Overview
This guide covers deploying the Sethi Tour & Travels application to production with custom domain support and high availability.

## Production Features Added

### 1. Server Stability
- **Graceful Shutdown**: Handles SIGTERM and SIGINT signals properly
- **Error Handling**: Comprehensive error logging and handling
- **Health Check Endpoint**: `/health` endpoint for monitoring
- **Process Management**: PM2 configuration for clustering and auto-restart

### 2. Security Enhancements
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **CORS Configuration**: Custom domain support via ALLOWED_ORIGINS environment variable
- **Rate Limiting**: API endpoint protection against abuse
- **Request Logging**: Comprehensive access and error logging

### 3. Performance Optimizations
- **Clustering**: PM2 cluster mode for multi-core utilization
- **Memory Management**: Automatic restart on memory limits
- **Request Limits**: Body parser limits to prevent attacks
- **Static Asset Serving**: Optimized static file serving

### 4. Monitoring & Logging
- **Access Logs**: Detailed request/response logging
- **Error Logs**: Structured error logging with stack traces
- **Health Monitoring**: System health metrics endpoint
- **PM2 Monitoring**: Process monitoring and management

## Environment Variables

### Required for Production
```bash
NODE_ENV=production
PORT=5000
DATABASE_URL=your_postgres_connection_string
```

### Optional for Custom Domain
```bash
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## Deployment Options

### Option 1: Direct Node.js (Recommended for Replit)
```bash
# Build the application
npm run build

# Start in production mode
npm start
```

### Option 2: PM2 Process Manager
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js --env production

# Monitor processes
pm2 monit

# View logs
pm2 logs
```

### Option 3: Docker Deployment
```bash
# Build Docker image
docker build -t sethi-tours .

# Run with Docker Compose
docker-compose up -d

# Check health
curl http://localhost:5000/health
```

## Custom Domain Setup

### 1. Configure DNS
Point your domain to your server's IP address:
```
A Record: @ -> YOUR_SERVER_IP
CNAME Record: www -> yourdomain.com
```

### 2. SSL Certificate (Let's Encrypt)
```bash
# Install certbot
sudo apt install certbot

# Generate SSL certificate
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com
```

### 3. Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /health {
        proxy_pass http://localhost:5000/health;
        access_log off;
    }
}
```

## Monitoring & Maintenance

### Health Check
```bash
curl -f http://localhost:5000/health
```

### Log Monitoring
```bash
# View access logs
tail -f logs/access.log

# View error logs
tail -f logs/error.log

# PM2 logs
pm2 logs
```

### Performance Monitoring
```bash
# PM2 monitoring
pm2 monit

# System resources
htop
df -h
```

## Backup Strategy

### Database Backup
```bash
# PostgreSQL backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql
```

### Application Logs
```bash
# Rotate logs daily
logrotate -f /etc/logrotate.d/sethi-tours
```

## Troubleshooting

### Common Issues
1. **Port Already in Use**: Check if another process is using port 5000
2. **Database Connection**: Verify DATABASE_URL is correct
3. **SSL Issues**: Check certificate paths and permissions
4. **High Memory Usage**: Monitor and adjust PM2 memory limits

### Debug Commands
```bash
# Check process status
pm2 status

# View real-time logs
pm2 logs --lines 100

# Restart application
pm2 restart all

# Check health endpoint
curl -I http://localhost:5000/health
```

## Performance Optimization

### 1. Enable Gzip Compression
Add to your reverse proxy configuration.

### 2. Configure Caching
Set appropriate cache headers for static assets.

### 3. Database Optimization
- Use connection pooling
- Optimize queries
- Regular database maintenance

### 4. CDN Integration
Consider using a CDN for static assets and images.

## Security Best Practices

1. **Regular Updates**: Keep dependencies updated
2. **SSL Configuration**: Use strong SSL/TLS settings
3. **Firewall Rules**: Restrict access to necessary ports only
4. **Rate Limiting**: Monitor and adjust rate limits
5. **Log Analysis**: Regular log analysis for security threats

## Scaling Considerations

### Horizontal Scaling
- Load balancer configuration
- Database clustering
- Session management

### Vertical Scaling
- Server resource monitoring
- Performance optimization
- Memory management

This deployment guide ensures your application will run reliably in production with proper monitoring, security, and performance optimizations.
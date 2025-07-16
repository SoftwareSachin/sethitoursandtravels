#!/bin/bash

# Production startup script for Sethi Tour & Travels
# This script ensures the application starts reliably in production

set -e

echo "Starting Sethi Tour & Travels in production mode..."

# Create necessary directories
mkdir -p logs
mkdir -p tmp
mkdir -p dist

# Set production environment
export NODE_ENV=production
export PORT=${PORT:-5000}

# Check if required files exist
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm ci --only=production
fi

# Build the application
echo "Building application..."
npm run build

# Check if build was successful
if [ ! -f "dist/index.js" ]; then
    echo "Error: Build failed - dist/index.js not found"
    exit 1
fi

# Set up log rotation
cat > /etc/logrotate.d/sethi-tours << EOL
/app/logs/*.log {
    daily
    rotate 30
    compress
    delaycompress
    missingok
    notifempty
    create 644 nodejs nodejs
    postrotate
        pkill -USR1 node || true
    endscript
}
EOL

# Function to start the application
start_app() {
    echo "Starting application on port $PORT..."
    
    # Start with PM2 if available, otherwise use node directly
    if command -v pm2 &> /dev/null; then
        echo "Starting with PM2..."
        pm2 start ecosystem.config.js --env production
        pm2 save
    else
        echo "Starting with Node.js directly..."
        node dist/index.js
    fi
}

# Function to check if app is running
check_health() {
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f http://localhost:$PORT/health > /dev/null 2>&1; then
            echo "Application is healthy!"
            return 0
        fi
        
        echo "Attempt $attempt: Waiting for application to start..."
        sleep 2
        ((attempt++))
    done
    
    echo "Application failed to start within expected time"
    return 1
}

# Cleanup function
cleanup() {
    echo "Cleaning up..."
    if command -v pm2 &> /dev/null; then
        pm2 stop all || true
        pm2 delete all || true
    fi
    pkill -f "node dist/index.js" || true
}

# Set up signal handlers
trap cleanup EXIT
trap cleanup SIGINT
trap cleanup SIGTERM

# Start the application
start_app &

# Wait for application to be ready
if check_health; then
    echo "Application started successfully!"
    
    # If using PM2, show status
    if command -v pm2 &> /dev/null; then
        pm2 status
        echo "Use 'pm2 logs' to view logs"
        echo "Use 'pm2 monit' to monitor processes"
    fi
    
    # Keep the script running
    wait
else
    echo "Failed to start application"
    cleanup
    exit 1
fi
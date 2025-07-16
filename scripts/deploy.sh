#!/bin/bash

# Deployment script for custom domains
# This script handles zero-downtime deployment

set -e

echo "Starting deployment process..."

# Configuration
APP_NAME="sethi-tours"
DEPLOY_DIR="/var/www/$APP_NAME"
BACKUP_DIR="/var/backups/$APP_NAME"
PORT=${PORT:-5000}

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    error "Please run as root or with sudo"
    exit 1
fi

# Create directories
mkdir -p $DEPLOY_DIR
mkdir -p $BACKUP_DIR
mkdir -p $DEPLOY_DIR/logs

# Backup current deployment
if [ -d "$DEPLOY_DIR/current" ]; then
    log "Creating backup of current deployment..."
    BACKUP_NAME="backup_$(date +%Y%m%d_%H%M%S)"
    cp -r $DEPLOY_DIR/current $BACKUP_DIR/$BACKUP_NAME
    log "Backup created: $BACKUP_DIR/$BACKUP_NAME"
fi

# Deploy new version
log "Deploying new version..."
cp -r . $DEPLOY_DIR/new

# Set proper permissions
chown -R nodejs:nodejs $DEPLOY_DIR/new
chmod +x $DEPLOY_DIR/new/scripts/*.sh

# Build the application
log "Building application..."
cd $DEPLOY_DIR/new
npm ci --only=production
npm run build

# Test the new deployment
log "Testing new deployment..."
if [ ! -f "dist/index.js" ]; then
    error "Build failed - dist/index.js not found"
    exit 1
fi

# Zero-downtime deployment
log "Performing zero-downtime deployment..."

# Start new instance on different port
TEST_PORT=$((PORT + 1))
NODE_ENV=production PORT=$TEST_PORT node dist/index.js &
NEW_PID=$!

# Wait for new instance to be ready
sleep 10

# Test new instance
if curl -f http://localhost:$TEST_PORT/health > /dev/null 2>&1; then
    log "New instance is healthy"
    
    # Stop old instance
    if command -v pm2 &> /dev/null; then
        pm2 stop $APP_NAME || true
    fi
    
    # Switch to new version
    if [ -d "$DEPLOY_DIR/current" ]; then
        mv $DEPLOY_DIR/current $DEPLOY_DIR/old
    fi
    mv $DEPLOY_DIR/new $DEPLOY_DIR/current
    
    # Kill test instance
    kill $NEW_PID || true
    
    # Start production instance
    cd $DEPLOY_DIR/current
    if command -v pm2 &> /dev/null; then
        pm2 start ecosystem.config.js --env production
        pm2 save
    else
        NODE_ENV=production PORT=$PORT node dist/index.js &
    fi
    
    # Wait and verify
    sleep 10
    if curl -f http://localhost:$PORT/health > /dev/null 2>&1; then
        log "Deployment successful!"
        
        # Cleanup old version
        rm -rf $DEPLOY_DIR/old
        
        # Setup log rotation
        cat > /etc/logrotate.d/sethi-tours << EOL
$DEPLOY_DIR/current/logs/*.log {
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
        
        # Setup systemd service
        cat > /etc/systemd/system/sethi-tours.service << EOL
[Unit]
Description=Sethi Tour & Travels
After=network.target

[Service]
Type=simple
User=nodejs
WorkingDirectory=$DEPLOY_DIR/current
ExecStart=/usr/bin/node dist/index.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=$PORT
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOL
        
        systemctl daemon-reload
        systemctl enable sethi-tours
        
        log "Deployment completed successfully!"
        
    else
        error "New deployment failed health check"
        exit 1
    fi
    
else
    error "New instance failed to start"
    kill $NEW_PID || true
    exit 1
fi

# Clean up old backups (keep last 10)
log "Cleaning up old backups..."
cd $BACKUP_DIR
ls -t | tail -n +11 | xargs rm -rf

log "Deployment process completed!"
log "Application is running on port $PORT"
log "Health check: curl http://localhost:$PORT/health"
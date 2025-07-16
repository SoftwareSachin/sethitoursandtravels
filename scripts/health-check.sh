#!/bin/bash

# Health check script for monitoring
# Can be used with external monitoring services

PORT=${PORT:-5000}
HOST=${HOST:-localhost}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "Checking application health..."

# Check if port is open
if ! nc -z $HOST $PORT 2>/dev/null; then
    echo -e "${RED}❌ Port $PORT is not accessible${NC}"
    exit 1
fi

# Check health endpoint
HEALTH_RESPONSE=$(curl -s -w "%{http_code}" http://$HOST:$PORT/health)
HTTP_CODE=${HEALTH_RESPONSE: -3}
RESPONSE_BODY=${HEALTH_RESPONSE%???}

if [ "$HTTP_CODE" -eq 200 ]; then
    echo -e "${GREEN}✅ Health check passed${NC}"
    
    # Parse health status
    if echo "$RESPONSE_BODY" | grep -q '"status":"healthy"'; then
        echo -e "${GREEN}✅ Application status: healthy${NC}"
    elif echo "$RESPONSE_BODY" | grep -q '"status":"warning"'; then
        echo -e "${YELLOW}⚠️  Application status: warning${NC}"
    else
        echo -e "${RED}❌ Application status: unhealthy${NC}"
        exit 1
    fi
    
    # Show uptime
    UPTIME=$(echo "$RESPONSE_BODY" | grep -o '"uptime":[0-9.]*' | cut -d':' -f2)
    if [ ! -z "$UPTIME" ]; then
        echo -e "${GREEN}⏱️  Uptime: ${UPTIME}s${NC}"
    fi
    
    # Check memory usage
    MEMORY_USED=$(echo "$RESPONSE_BODY" | grep -o '"heapUsed":[0-9]*' | cut -d':' -f2)
    if [ ! -z "$MEMORY_USED" ]; then
        MEMORY_MB=$((MEMORY_USED / 1024 / 1024))
        if [ $MEMORY_MB -gt 800 ]; then
            echo -e "${YELLOW}⚠️  High memory usage: ${MEMORY_MB}MB${NC}"
        else
            echo -e "${GREEN}💾 Memory usage: ${MEMORY_MB}MB${NC}"
        fi
    fi
    
else
    echo -e "${RED}❌ Health check failed (HTTP $HTTP_CODE)${NC}"
    echo "Response: $RESPONSE_BODY"
    exit 1
fi

# Check if PM2 is running (if available)
if command -v pm2 &> /dev/null; then
    PM2_STATUS=$(pm2 jlist 2>/dev/null)
    if echo "$PM2_STATUS" | grep -q '"status":"online"'; then
        echo -e "${GREEN}✅ PM2 process is online${NC}"
    else
        echo -e "${YELLOW}⚠️  PM2 process may not be running${NC}"
    fi
fi

echo -e "${GREEN}✅ All health checks passed${NC}"
exit 0
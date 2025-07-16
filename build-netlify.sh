#!/bin/bash

# Build script for Netlify deployment
echo "Building for Netlify deployment..."

# Build the frontend
echo "Building frontend..."
vite build

# Copy assets to the build directory
echo "Copying attached assets..."
mkdir -p dist/public/attached_assets
cp -r attached_assets/* dist/public/attached_assets/

# Create a simple _headers file for additional security
echo "Creating headers file..."
cat > dist/public/_headers << 'EOF'
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

/attached_assets/*
  Cache-Control: public, max-age=31536000
EOF

echo "Build completed successfully!"
echo "Frontend built to: dist/public"
echo "Serverless functions available in: netlify/functions"
echo "Assets copied to: dist/public/attached_assets"
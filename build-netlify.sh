#!/bin/bash

# Build script for Netlify deployment with lossless image optimization
echo "Building for Netlify deployment..."

# Step 1: Lossless image optimization (if optimization tools are available)
echo "Checking for image optimization tools..."
if command -v jpegoptim &> /dev/null && command -v pngcrush &> /dev/null; then
    echo "Running lossless image optimization..."
    ./scripts/optimize-images.sh
    IMAGE_SOURCE="attached_assets_optimized"
else
    echo "Optimization tools not available, using original images..."
    IMAGE_SOURCE="attached_assets"
fi

# Step 2: Build the frontend
echo "Building frontend..."
vite build

# Step 3: Copy optimized images to the build directory
echo "Copying images from $IMAGE_SOURCE..."
mkdir -p dist/public/attached_assets
cp -r $IMAGE_SOURCE/* dist/public/attached_assets/

# Step 4: Copy service worker
echo "Copying service worker..."
cp client/public/sw.js dist/public/

# Step 5: Create optimized _headers file for aggressive caching
echo "Creating headers file..."
cat > dist/public/_headers << 'EOF'
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

/attached_assets/*
  Cache-Control: public, max-age=31536000, immutable

*.jpg
  Cache-Control: public, max-age=31536000, immutable

*.jpeg
  Cache-Control: public, max-age=31536000, immutable
  
*.png
  Cache-Control: public, max-age=31536000, immutable

/sw.js
  Cache-Control: public, max-age=0, must-revalidate
EOF

echo "Build completed successfully!"
echo "📊 Build Statistics:"
echo "  - Images: $(find dist/public/attached_assets -type f | wc -l) files"
echo "  - Total size: $(du -sh dist/public/attached_assets | cut -f1)"
echo "  - Service worker: $([ -f dist/public/sw.js ] && echo 'Ready' || echo 'Missing')"
echo "  - Frontend built to: dist/public"
echo "  - Serverless functions available in: netlify/functions"
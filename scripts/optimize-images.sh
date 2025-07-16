#!/bin/bash

# Lossless Image Optimization Script for Netlify Deployment
# Optimizes all images without any quality loss using industry-standard tools

echo "🖼️  Starting lossless image optimization for 337 Rajasthan images..."

# Create optimized directory
mkdir -p attached_assets_optimized

# Copy all images to optimized directory first
cp -r attached_assets/* attached_assets_optimized/

cd attached_assets_optimized

# Install optimization tools if not available
if ! command -v jpegoptim &> /dev/null; then
    echo "Installing jpegoptim..."
    sudo apt-get update && sudo apt-get install -y jpegoptim
fi

if ! command -v pngcrush &> /dev/null; then
    echo "Installing pngcrush..."
    sudo apt-get install -y pngcrush
fi

# Count files before optimization
echo "📊 Counting files before optimization..."
jpeg_count=$(find . -name "*.jpg" -o -name "*.jpeg" | wc -l)
png_count=$(find . -name "*.png" | wc -l)
total_size_before=$(du -sh . | cut -f1)

echo "Found $jpeg_count JPEG files and $png_count PNG files"
echo "Total size before optimization: $total_size_before"

# Optimize JPEG files (lossless)
echo "🔧 Optimizing JPEG files with lossless compression..."
find . -name "*.jpg" -o -name "*.jpeg" | while read -r file; do
    echo "Optimizing: $file"
    jpegoptim --all-progressive --strip-all "$file"
done

# Optimize PNG files (lossless)
echo "🔧 Optimizing PNG files with lossless compression..."
find . -name "*.png" | while read -r file; do
    echo "Optimizing: $file"
    pngcrush -rem alla -brute "$file" "${file}.tmp" && mv "${file}.tmp" "$file"
done

# Show results
total_size_after=$(du -sh . | cut -f1)
echo "✅ Optimization complete!"
echo "📊 Results:"
echo "  - JPEG files optimized: $jpeg_count"
echo "  - PNG files optimized: $png_count"
echo "  - Size before: $total_size_before"
echo "  - Size after: $total_size_after"
echo "  - Location: attached_assets_optimized/"
echo ""
echo "🚀 All images maintain 100% original quality with lossless optimization"
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

/**
 * Middleware to compress uploaded images to ensure they are below 800KB
 * This middleware should be used after multer upload
 */
const compressImage = async (req, res, next) => {
    try {
        // If no file was uploaded, skip compression
        if (!req.file) {
            return next();
        }

        const filePath = req.file.path;
        const fileExt = path.extname(req.file.originalname).toLowerCase();

        // Only compress image files
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
        if (!imageExtensions.includes(fileExt)) {
            return next();
        }

        console.log(`📦 Compressing image: ${req.file.filename}`);
        console.log(`📊 Original size: ${(req.file.size / 1024).toFixed(2)} KB`);

        const targetSizeKB = 800;
        const targetSizeBytes = targetSizeKB * 1024;

        // If file is already below 800KB, skip compression
        if (req.file.size <= targetSizeBytes) {
            console.log(`✅ Image already below ${targetSizeKB}KB, skipping compression`);
            return next();
        }

        // Start with quality 90 and reduce if needed
        let quality = 90;
        let compressedBuffer;
        let finalSize;

        // Try different quality levels until we get below 800KB
        while (quality > 10) {
            const sharpInstance = sharp(filePath);

            // Convert to appropriate format based on original
            if (fileExt === '.png') {
                compressedBuffer = await sharpInstance
                    .png({ quality, compressionLevel: 9 })
                    .toBuffer();
            } else if (fileExt === '.webp') {
                compressedBuffer = await sharpInstance
                    .webp({ quality })
                    .toBuffer();
            } else {
                // For JPEG, JPG, and GIF (convert GIF to JPEG)
                compressedBuffer = await sharpInstance
                    .jpeg({ quality, mozjpeg: true })
                    .toBuffer();
            }

            finalSize = compressedBuffer.length;

            // If size is acceptable, break the loop
            if (finalSize <= targetSizeBytes) {
                break;
            }

            // Reduce quality for next iteration
            quality -= 10;
        }

        // If still too large after minimum quality, resize the image
        if (finalSize > targetSizeBytes) {
            console.log(`⚠️ Still too large at minimum quality, resizing image...`);

            let width = 1920; // Start with Full HD width

            while (width >= 640 && finalSize > targetSizeBytes) {
                const sharpInstance = sharp(filePath).resize({ width, withoutEnlargement: true });

                if (fileExt === '.png') {
                    compressedBuffer = await sharpInstance
                        .png({ quality: 80, compressionLevel: 9 })
                        .toBuffer();
                } else if (fileExt === '.webp') {
                    compressedBuffer = await sharpInstance
                        .webp({ quality: 80 })
                        .toBuffer();
                } else {
                    compressedBuffer = await sharpInstance
                        .jpeg({ quality: 80, mozjpeg: true })
                        .toBuffer();
                }

                finalSize = compressedBuffer.length;

                if (finalSize <= targetSizeBytes) {
                    break;
                }

                width -= 320; // Reduce width by 320px each iteration
            }
        }

        // Write the compressed image back to the file
        await fs.writeFile(filePath, compressedBuffer);

        // Update file size in req.file
        req.file.size = finalSize;

        console.log(`✅ Compressed size: ${(finalSize / 1024).toFixed(2)} KB`);
        console.log(`📉 Reduction: ${(((req.file.size - finalSize) / req.file.size) * 100).toFixed(1)}%`);

        next();
    } catch (error) {
        console.error('❌ Image compression error:', error);
        // Continue even if compression fails
        next();
    }
};

module.exports = compressImage;

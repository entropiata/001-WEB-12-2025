const fs = require('fs').promises;
const path = require('path');
const { pool } = require('../config/db');

/**
 * Service to clean up unused images from the uploads directory
 */
class ImageCleanupService {
    constructor() {
        this.uploadsDir = path.join(__dirname, '../uploads/articles');
    }

    /**
     * Get all image filenames from the uploads directory
     */
    async getUploadedImages() {
        try {
            const files = await fs.readdir(this.uploadsDir);
            // Filter only image files
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
            return files.filter(file => {
                const ext = path.extname(file).toLowerCase();
                return imageExtensions.includes(ext);
            });
        } catch (error) {
            console.error('Error reading uploads directory:', error);
            return [];
        }
    }

    /**
     * Get all image URLs referenced in articles
     * This includes both the 'image' field (featured image) and images in content
     */
    async getReferencedImages() {
        try {
            const [articles] = await pool.query('SELECT image, content FROM articles');
            const referencedImages = new Set();

            articles.forEach(article => {
                // Extract featured image filename
                if (article.image) {
                    const filename = this.extractFilename(article.image);
                    if (filename) {
                        referencedImages.add(filename);
                    }
                }

                // Extract images from content (HTML img tags and markdown images)
                if (article.content) {
                    const imageMatches = this.extractImagesFromContent(article.content);
                    imageMatches.forEach(filename => referencedImages.add(filename));
                }
            });

            return Array.from(referencedImages);
        } catch (error) {
            console.error('Error getting referenced images:', error);
            return [];
        }
    }

    /**
     * Extract filename from URL or path
     */
    extractFilename(url) {
        if (!url) return null;

        // Handle full URLs like http://localhost:5000/uploads/articles/image.jpg
        // or relative paths like /uploads/articles/image.jpg
        // or just filenames like image.jpg
        const parts = url.split('/');
        const filename = parts[parts.length - 1];

        // Remove query parameters if any
        return filename.split('?')[0];
    }

    /**
     * Extract image filenames from article content
     * Supports both HTML img tags and markdown image syntax
     */
    extractImagesFromContent(content) {
        const filenames = [];

        // Match HTML img tags: <img src="...">
        const htmlImgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
        let match;

        while ((match = htmlImgRegex.exec(content)) !== null) {
            const filename = this.extractFilename(match[1]);
            if (filename && this.isArticleImage(match[1])) {
                filenames.push(filename);
            }
        }

        // Match markdown images: ![alt](url)
        const markdownImgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;

        while ((match = markdownImgRegex.exec(content)) !== null) {
            const filename = this.extractFilename(match[2]);
            if (filename && this.isArticleImage(match[2])) {
                filenames.push(filename);
            }
        }

        return filenames;
    }

    /**
     * Check if the URL/path is from the articles upload directory
     */
    isArticleImage(url) {
        return url.includes('/uploads/articles/') || url.includes('\\uploads\\articles\\');
    }

    /**
     * Find unused images by comparing uploaded vs referenced
     */
    async findUnusedImages() {
        const uploadedImages = await this.getUploadedImages();
        const referencedImages = await this.getReferencedImages();

        const unusedImages = uploadedImages.filter(
            filename => !referencedImages.includes(filename)
        );

        return {
            total: uploadedImages.length,
            referenced: referencedImages.length,
            unused: unusedImages.length,
            unusedFiles: unusedImages
        };
    }

    /**
     * Delete unused images from the uploads directory
     */
    async cleanupUnusedImages(dryRun = false) {
        const result = await this.findUnusedImages();
        const deletedFiles = [];
        const errors = [];

        if (result.unusedFiles.length === 0) {
            console.log('✅ No unused images found');
            return {
                ...result,
                deleted: 0,
                deletedFiles: [],
                errors: [],
                dryRun
            };
        }

        console.log(`🗑️  Found ${result.unusedFiles.length} unused image(s)`);

        if (dryRun) {
            console.log('🔍 DRY RUN - No files will be deleted');
            console.log('Unused files:', result.unusedFiles);
            return {
                ...result,
                deleted: 0,
                deletedFiles: result.unusedFiles,
                errors: [],
                dryRun: true
            };
        }

        // Delete each unused file
        for (const filename of result.unusedFiles) {
            try {
                const filePath = path.join(this.uploadsDir, filename);
                await fs.unlink(filePath);
                deletedFiles.push(filename);
                console.log(`✅ Deleted: ${filename}`);
            } catch (error) {
                console.error(`❌ Failed to delete ${filename}:`, error.message);
                errors.push({
                    filename,
                    error: error.message
                });
            }
        }

        console.log(`\n🎉 Cleanup complete! Deleted ${deletedFiles.length} file(s)`);

        return {
            ...result,
            deleted: deletedFiles.length,
            deletedFiles,
            errors,
            dryRun: false
        };
    }

    /**
     * Get cleanup statistics without deleting
     */
    async getCleanupStats() {
        const result = await this.findUnusedImages();

        // Calculate total size of unused images
        let totalSize = 0;
        for (const filename of result.unusedFiles) {
            try {
                const filePath = path.join(this.uploadsDir, filename);
                const stats = await fs.stat(filePath);
                totalSize += stats.size;
            } catch (error) {
                // Ignore errors for individual files
            }
        }

        return {
            ...result,
            totalSizeBytes: totalSize,
            totalSizeKB: (totalSize / 1024).toFixed(2),
            totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2)
        };
    }
}

module.exports = new ImageCleanupService();

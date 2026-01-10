const express = require('express');
const router = express.Router();
const imageCleanupService = require('../services/imageCleanup');
const scheduledCleanup = require('../services/scheduledCleanup');
const authMiddleware = require('../middleware/auth');

/**
 * Get cleanup statistics
 * GET /api/cleanup/stats
 */
router.get('/stats', authMiddleware, async (req, res) => {
    try {
        const stats = await imageCleanupService.getCleanupStats();

        res.json({
            success: true,
            data: stats
        });
    } catch (error) {
        console.error('Get cleanup stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get cleanup statistics'
        });
    }
});

/**
 * Preview unused images (dry run)
 * GET /api/cleanup/preview
 */
router.get('/preview', authMiddleware, async (req, res) => {
    try {
        const result = await imageCleanupService.cleanupUnusedImages(true);

        res.json({
            success: true,
            message: 'Preview completed',
            data: result
        });
    } catch (error) {
        console.error('Cleanup preview error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to preview cleanup'
        });
    }
});

/**
 * Execute cleanup - delete unused images
 * POST /api/cleanup/execute
 */
router.post('/execute', authMiddleware, async (req, res) => {
    try {
        const result = await imageCleanupService.cleanupUnusedImages(false);

        res.json({
            success: true,
            message: `Successfully deleted ${result.deleted} unused image(s)`,
            data: result
        });
    } catch (error) {
        console.error('Cleanup execution error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to execute cleanup'
        });
    }
});

/**
 * Get scheduled cleanup status
 * GET /api/cleanup/status
 */
router.get('/status', authMiddleware, async (req, res) => {
    try {
        const status = scheduledCleanup.getStatus();

        res.json({
            success: true,
            data: status
        });
    } catch (error) {
        console.error('Get cleanup status error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get cleanup status'
        });
    }
});

module.exports = router;

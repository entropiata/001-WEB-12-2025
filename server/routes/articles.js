const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/uploadMiddleware');

// Public routes (for frontend to fetch articles)
router.get('/', articlesController.getAllArticles);
router.get('/slug/:slug', articlesController.getArticleBySlug);
router.get('/:id', articlesController.getArticleById);

// Protected routes (admin only)
router.post('/', authMiddleware, articlesController.createArticle);
router.put('/:id', authMiddleware, articlesController.updateArticle);
router.delete('/:id', authMiddleware, articlesController.deleteArticle);

// Image upload route (admin only)
router.post('/upload', authMiddleware, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded'
            });
        }

        // Return the URL path to the uploaded file
        const imageUrl = `http://localhost:${process.env.PORT || 5000}/uploads/articles/${req.file.filename}`;

        res.json({
            success: true,
            message: 'Image uploaded successfully',
            data: {
                filename: req.file.filename,
                url: imageUrl,
                size: req.file.size
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to upload image'
        });
    }
});

module.exports = router;

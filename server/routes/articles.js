const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');
const authMiddleware = require('../middleware/auth');

// Public routes (for frontend to fetch articles)
router.get('/', articlesController.getAllArticles);
router.get('/:id', articlesController.getArticleById);

// Protected routes (admin only)
router.post('/', authMiddleware, articlesController.createArticle);
router.put('/:id', authMiddleware, articlesController.updateArticle);
router.delete('/:id', authMiddleware, articlesController.deleteArticle);

module.exports = router;

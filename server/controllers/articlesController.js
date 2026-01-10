const { pool } = require('../config/db');

// Get all articles
exports.getAllArticles = async (req, res) => {
    try {
        const { status } = req.query;

        let query = 'SELECT * FROM articles';
        let params = [];

        if (status) {
            query += ' WHERE status = ?';
            params.push(status);
        }

        query += ' ORDER BY created_at DESC';

        const [articles] = await pool.query(query, params);

        res.json({
            success: true,
            data: articles
        });
    } catch (error) {
        console.error('Get articles error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// Get single article
exports.getArticleById = async (req, res) => {
    try {
        const { id } = req.params;

        const [articles] = await pool.query(
            'SELECT * FROM articles WHERE id = ?',
            [id]
        );

        if (articles.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Article not found'
            });
        }

        res.json({
            success: true,
            data: articles[0]
        });
    } catch (error) {
        console.error('Get article error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// Create article
exports.createArticle = async (req, res) => {
    try {
        const { title, content, image, status } = req.body;

        // Validation
        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: 'Title and content are required'
            });
        }

        const [result] = await pool.query(
            'INSERT INTO articles (title, content, image, status) VALUES (?, ?, ?, ?)',
            [title, content, image || null, status || 'draft']
        );

        res.status(201).json({
            success: true,
            message: 'Article created successfully',
            data: {
                id: result.insertId,
                title,
                content,
                image,
                status: status || 'draft'
            }
        });
    } catch (error) {
        console.error('Create article error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// Update article
exports.updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, image, status } = req.body;

        // Check if article exists
        const [existing] = await pool.query(
            'SELECT * FROM articles WHERE id = ?',
            [id]
        );

        if (existing.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Article not found'
            });
        }

        // Validation
        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: 'Title and content are required'
            });
        }

        await pool.query(
            'UPDATE articles SET title = ?, content = ?, image = ?, status = ? WHERE id = ?',
            [title, content, image || null, status || 'draft', id]
        );

        res.json({
            success: true,
            message: 'Article updated successfully',
            data: {
                id,
                title,
                content,
                image,
                status
            }
        });
    } catch (error) {
        console.error('Update article error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// Delete article
exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if article exists
        const [existing] = await pool.query(
            'SELECT * FROM articles WHERE id = ?',
            [id]
        );

        if (existing.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Article not found'
            });
        }

        await pool.query('DELETE FROM articles WHERE id = ?', [id]);

        res.json({
            success: true,
            message: 'Article deleted successfully'
        });
    } catch (error) {
        console.error('Delete article error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

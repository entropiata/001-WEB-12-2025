const { pool } = require('../config/db');

// Helper function to generate slug from title
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/(^-|-$)/g, '');
};

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

// Get single article by ID
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

// Get single article by slug
exports.getArticleBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        const [articles] = await pool.query(
            'SELECT * FROM articles WHERE slug = ? AND status = ?',
            [slug, 'published']
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
        console.error('Get article by slug error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// Create article
exports.createArticle = async (req, res) => {
    try {
        const { title, author, category, content, excerpt, image, status } = req.body;

        // Validation
        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: 'Title and content are required'
            });
        }

        // Generate slug from title if not provided
        let slug = req.body.slug || generateSlug(title);

        // Check if slug already exists
        const [existing] = await pool.query(
            'SELECT id FROM articles WHERE slug = ?',
            [slug]
        );

        if (existing.length > 0) {
            // Append timestamp to make it unique
            slug = `${slug}-${Date.now()}`;
        }

        const [result] = await pool.query(
            'INSERT INTO articles (title, author, category, slug, content, excerpt, image, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                title,
                author || 'Tim Puskesmas Pasongsongan',
                category || 'Artikel',
                slug,
                content,
                excerpt || null,
                image || null,
                status || 'draft'
            ]
        );

        res.status(201).json({
            success: true,
            message: 'Article created successfully',
            data: {
                id: result.insertId,
                title,
                author: author || 'Tim Puskesmas Pasongsongan',
                category: category || 'Artikel',
                slug,
                content,
                excerpt,
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
        const { title, author, category, slug, content, excerpt, image, status } = req.body;

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

        // Generate or validate slug
        let finalSlug = slug || existing[0].slug || generateSlug(title);

        // Check if slug is unique (excluding current article)
        const [slugCheck] = await pool.query(
            'SELECT id FROM articles WHERE slug = ? AND id != ?',
            [finalSlug, id]
        );

        if (slugCheck.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Slug already exists. Please use a different slug.'
            });
        }

        await pool.query(
            'UPDATE articles SET title = ?, author = ?, category = ?, slug = ?, content = ?, excerpt = ?, image = ?, status = ? WHERE id = ?',
            [
                title,
                author || 'Tim Puskesmas Pasongsongan',
                category || 'Artikel',
                finalSlug,
                content,
                excerpt || null,
                image || null,
                status || 'draft',
                id
            ]
        );

        res.json({
            success: true,
            message: 'Article updated successfully',
            data: {
                id,
                title,
                author,
                category,
                slug: finalSlug,
                content,
                excerpt,
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

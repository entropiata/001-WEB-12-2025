const db = require('../config/db');

exports.getAllArticles = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM articles ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getArticleBySlug = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM articles WHERE slug = ?', [req.params.slug]);
        if (rows.length === 0) return res.status(404).json({ message: 'Article not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createArticle = async (req, res) => {
    try {
        const { title, slug, content, image } = req.body;
        const [result] = await db.query('INSERT INTO articles (title, slug, content, image) VALUES (?, ?, ?, ?)', [title, slug, content, image]);
        res.status(201).json({ id: result.insertId, title, slug, content, image });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

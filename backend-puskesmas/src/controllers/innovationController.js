const db = require('../config/db');

exports.getAllInnovations = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM innovations ORDER BY date DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInnovationBySlug = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM innovations WHERE slug = ?', [req.params.slug]);
        if (rows.length === 0) return res.status(404).json({ message: 'Innovation not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

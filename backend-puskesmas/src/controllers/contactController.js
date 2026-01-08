const db = require('../config/db');

exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const [result] = await db.query('INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message]);
        res.status(201).json({ message: 'Message sent successfully', id: result.insertId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM messages ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

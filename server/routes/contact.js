const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Rate limiting middleware (simple implementation)
const contactRateLimit = {};

const rateLimitMiddleware = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour
    const maxRequests = 5;

    if (!contactRateLimit[ip]) {
        contactRateLimit[ip] = [];
    }

    // Remove old requests outside the time window
    contactRateLimit[ip] = contactRateLimit[ip].filter(
        timestamp => now - timestamp < windowMs
    );

    if (contactRateLimit[ip].length >= maxRequests) {
        return res.status(429).json({
            success: false,
            message: 'Terlalu banyak permintaan. Silakan coba lagi dalam 1 jam.'
        });
    }

    contactRateLimit[ip].push(now);
    next();
};

// Public route - no authentication required
router.post('/', rateLimitMiddleware, contactController.submitContact);

module.exports = router;

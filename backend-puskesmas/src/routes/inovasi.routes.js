const express = require('express');
const router = express.Router();
const innovationController = require('../controllers/innovationController');

router.get('/', innovationController.getAllInnovations);
router.get('/:slug', innovationController.getInnovationBySlug);

module.exports = router;

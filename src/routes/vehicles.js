const express = require('express');
const router = express.Router();

const veihiclesController = require('../controllers/vehicles.controller')

/**
 * GET /v1/vehicles
 */
router.get('/', async (req, res, next) => {
    return res.json(veihiclesController.list(req, res));
});

module.exports = router;

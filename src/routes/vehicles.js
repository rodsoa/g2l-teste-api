const express = require('express');
const router = express.Router();

const veihiclesController = require('../controllers/vehicles.controller')

/**
 * GET /v1/vehicles
 */
router.get('/',  (req, res, next) => {
    return veihiclesController.list(req, res);
});


/**
 * GET /v1/vehicles/:plate
 */
router.get('/:plate',  (req, res, next) => {
    return veihiclesController.show(req, res);
});

/**
 * POST /v1/vehicles
 */
router.post('/',  (req, res, next) => {
    return veihiclesController.create(req, res);
});

/**
 * PUT /v1/vehicles/:plate
 */
router.put('/:plate',  (req, res, next) => {
    return veihiclesController.update(req, res);
});

/**
 * DELETE /v1/vehicles/:plate
 */
router.delete('/:plate',  (req, res, next) => {
    return veihiclesController.destroy(req, res);
});

module.exports = router;

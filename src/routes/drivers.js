const express = require('express');
const router = express.Router();

const driversController = require('../controllers/drivers.controller')

/**
 * GET /v1/drivers
 */
router.get('/',  (req, res, next) => {
    return driversController.list(req, res);
});


/**
 * GET /v1/drivers/:cpf
 */
router.get('/:cpf',  (req, res, next) => {
    return driversController.show(req, res);
});

/**
 * POST /v1/drivers
 */
router.post('/',  (req, res, next) => {
    return driversController.create(req, res);
});

/**
 * POST /v1/drivers/add
 */
router.post('/add',  (req, res, next) => {
    return driversController.add(req, res);
});

/**
 * POST /v1/drivers/remove
 */
router.put('/add',  (req, res, next) => {
    return driversController.remove(req, res);
});
/**
 * PUT /v1/drivers/:cpf
 */
router.put('/:cpf',  (req, res, next) => {
    return driversController.update(req, res);
});

/**
 * DELETE /v1/drivers/:cpf
 */
router.delete('/:cpf',  (req, res, next) => {
    return driversController.destroy(req, res);
});

module.exports = router;
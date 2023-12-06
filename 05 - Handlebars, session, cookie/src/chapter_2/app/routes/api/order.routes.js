const { Router } = require('express');
const controllers = require('../../controllers/api/order.controller');

const router = Router();

router.get('/', controllers.getAllOrders);
router.get('/:id', controllers.getOrderById);
router.post('/', controllers.createOrder);
router.put('/:id', controllers.updateOrder);
router.delete('/:id', controllers.deleteOrderById);
router.delete('/', controllers.deleteAllOrders);

module.exports = router;

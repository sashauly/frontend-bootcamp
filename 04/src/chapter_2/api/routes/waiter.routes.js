const { Router } = require('express');
const controllers = require('../controllers').waiterController;

const router = Router();

router.post('/', controllers.createWaiter);

module.exports = router;

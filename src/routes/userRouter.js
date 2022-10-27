const express = require('express');
const userController = require('../controllers/userController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/', userController.insert);

router.use(validateToken);

router.get('/', userController.getAll);

router.get('/:id', userController.findById);

module.exports = router;
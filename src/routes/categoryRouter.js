const express = require('express');
const categoryController = require('../controllers/categoryController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(validateToken);

router.post('/', categoryController.create);

module.exports = router;
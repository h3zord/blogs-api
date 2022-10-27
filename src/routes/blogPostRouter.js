const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(validateToken);

router.post('/', blogPostController.insert);

router.get('/', blogPostController.getAll);

module.exports = router;
const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(validateToken);

router.post('/', blogPostController.insert);

router.get('/', blogPostController.getAll);

router.get('/:id', blogPostController.findById);

router.put('/:id', blogPostController.updateById);

router.delete('/:id', blogPostController.deleteById);

module.exports = router;
const express = require('express');
const loginRouters = require('./loginRouters');

const router = express.Router();

router.use('/login', loginRouters);

module.exports = router;
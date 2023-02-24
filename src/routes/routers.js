const express = require('express');

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const blogPostRouter = require('./blogPostRouter');

const router = express.Router();

router.use(loginRouter);

router.use(userRouter);

router.use(categoryRouter);

router.use(blogPostRouter);

module.exports = router;
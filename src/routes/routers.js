const express = require('express');

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');

const router = express.Router();

router.use('/login', loginRouter);

router.use('/user', userRouter);

router.use('/categories', categoryRouter);

module.exports = router;
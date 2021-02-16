const express = require('express');

const pageRouter = require('./place-routes');
const userRouter = require('./user-routes');

const router = express.Router();

router.use('/users', userRouter);

router.use('/places', pageRouter);

module.exports = router;

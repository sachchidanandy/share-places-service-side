const express = require('express');

const HttpErrors = require('../modals/HttpError');

const router = express.Router();

router.get('/', (req, res, next) => {
    return next(new HttpErrors("Just for funn", 404));
});

module.exports = router;

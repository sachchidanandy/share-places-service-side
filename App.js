const express = require('express');
const bodyParser = require('body-parser');

const routeHandler = require('./api/routes');
const Constant = require('./api/utility/constant');
const HttpError = require('./api/modals/HttpError');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// handle all request starting /api
app.use('/api', routeHandler);

// Handle route not found
app.use((req, res, next) => {
    throw new HttpError("Route not found", Constant.NOT_FOUND);
});

// Error handler middleware
app.use((error, req, res, next) => {
    res.status(
        error.statusCode || Constant.INTERNAL_SERVER_ERROR
    ).json({message: error.message || 'Something went wrong !'});
});

app.listen(5000, () => console.log("Server Started"));

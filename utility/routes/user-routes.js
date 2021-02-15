const express = require('express');

const { getAllUsers, loginHandler, signupHanlder } = require('../controller/user-controller');

const routes = express.Router();

routes.get('/', getAllUsers);
routes.post('/signup', signupHanlder);
routes.post('/login', loginHandler);

module.exports = routes;

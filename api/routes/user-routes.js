const express = require('express');

const { validateEmail, validatePassword, validateForRequired } = require('../utility/validation-rules');
const { getAllUsers, loginHandler, signupHanlder } = require('../controller/user-controller');

const routes = express.Router();

routes.get('/', getAllUsers);
routes.post('/signup', [validateEmail, validatePassword, validateForRequired('name')], signupHanlder);
routes.post('/login', loginHandler);

module.exports = routes;

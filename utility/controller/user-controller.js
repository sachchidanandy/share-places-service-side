const HttpError = require('../modals/HttpError');
const { v4: uuidv4 } = require('uuid');
const { CREATED, UN_PROCESSED } = require('../config/Constant');

const DUMMY_USER = [
    {
        id: 'u1',
        name: 'Sachin Yadav',
        email: 'test@test.com',
        password: 'testpassword'
    }
]

const getAllUsers = (req, res, next) => {
    return res.json(DUMMY_USER);
};

const signupHanlder = (req, res, next) => {
    const { name, email, password } = req.body;
    const findUser = DUMMY_USER.find(data => data.email === email);
    if (findUser) {
        return next(new HttpError('Email Id already registered, please login', UN_PROCESSED));
    }
    const newUser = {
        id: uuidv4(),
        name,
        email,
        password
    };
    DUMMY_USER.push(newUser);

    return res.status(CREATED).json(newUser);
};

const loginHandler = (req, res, next) => {
    const { email, password } = req.body;

    const filteredUser = DUMMY_USER.find(data => data.email === email);
    if (filteredUser && filteredUser.password !== password) {
        return next(new HttpError('Invalid credentials', UN_PROCESSED))
    };

    return res.json({message: 'Login success!'});
};

exports.getAllUsers = getAllUsers;
exports.signupHanlder = signupHanlder;
exports.loginHandler = loginHandler;

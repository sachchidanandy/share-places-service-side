const { check } = require('express-validator');

exports.validateEmail = check('email', 'Invalid Email Id').normalizeEmail().isEmail();
exports.validatePassword = check('password', 'The password must be 5+ chars long and contain a number')
    .not()
    .isIn(['123', 'password', 'god'])
    .withMessage('Do not use a common word as the password')
    .isLength({ min: 5 })
    .matches(/\d/);
exports.validateForRequired = fieldName => check(fieldName, `Please enter ${fieldName}`).not().isEmpty();
exports.validateForMinCharacter = (fieldName, minCharacter) => check(fieldName, `Please enter ${fieldName}`)
    .isLength({min: minCharacter})
    .withMessage(`The ${fieldName} must be atleast of ${minCharacter} characters`);

exports.getValidationErrorMessages = validationError => {
    let message = '';
    if (validationError && validationError.errors && validationError.errors instanceof Array) {
        for (const ValError of validationError.errors) {
            message = message ? `${message}, ${ValError.msg}` : ValError.msg
        }
    }
    return message;
};
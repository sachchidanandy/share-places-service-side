class HttpErrors extends Error {
    constructor(ErrorMessage, statusCode) {
        super(ErrorMessage);
        this.statusCode = statusCode
    }
};

module.exports = HttpErrors;

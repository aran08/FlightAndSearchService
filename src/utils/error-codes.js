const ClientErrorsCodes = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISED:401,
    NOY_FOUND:404
});

const ServerErrorsCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
});

const SuccessCode = Object.freeze ({
    OK:200,
    CREATED:201
});

module.exports = {
    ClientErrorsCodes,
    ServerErrorsCodes,
    SuccessCode
}
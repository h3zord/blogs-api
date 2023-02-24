const jwtUtil = require('../utils/jwtUtil');

const validateToken = async (req, _res, next) => {
    const { authorization: token } = req.headers;
    jwtUtil.validateToken(token);

    next();
};

module.exports = { validateToken };
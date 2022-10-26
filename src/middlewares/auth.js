const jwtUtil = require('../utils/jwtUtil');

const validateToken = async (req, _res, next) => {
    const { authorization } = req.headers;
    jwtUtil.validateToken(authorization);

    next();
};

module.exports = { validateToken };
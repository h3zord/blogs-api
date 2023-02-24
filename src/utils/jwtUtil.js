require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '9999d',
    algorithm: 'HS256', 
  });

  return token;
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token obrigatório!');
    e.message = 'Token not found';
    e.status = 404;
    throw e;
  }

  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    const e = new Error('Token inválido');
    e.message = 'Expired or invalid token';
    e.status = 401;
    throw e;
  }
};

module.exports = { createToken, validateToken };
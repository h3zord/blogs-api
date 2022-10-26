const Joi = require('joi');
const jwtUtil = require('../utils/jwtUtil');

const { User } = require('../models');

const validateBody = (body) => {
  const schema = Joi.object({
     email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    const e = new Error('Usuário ou senha inválidos');
    e.message = 'Some required fields are missing';
    e.status = 400;
    throw e;
  }

  return value;
};

const validateLogin = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    const e = new Error('Usuário ou senha não válidos!');
    e.message = 'Invalid fields';
    e.status = 400;
    throw e;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = { validateBody, validateLogin };
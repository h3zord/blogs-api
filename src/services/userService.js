const Joi = require('joi');
const jwtUtil = require('../utils/jwtUtil');

const { User } = require('../models');

const validateBody = (body) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    const e = new Error('Invalid fields');
    e.message = error.message;
    e.status = 400;
    throw e;
  }

  return value;
};

const validateEmail = async (body) => {
  const { email } = body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    const e = new Error('Email já cadastrado');
    e.message = 'User already registered';
    e.status = 409;
    throw e;
  }

  await User.create(body);

  const { password, ...userWithoutPassword } = body;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) {
    const e = new Error('User não existe');
    e.message = 'User does not exist';
    e.status = 404;
    throw e;
  }

  return user;
};

module.exports = { validateBody, validateEmail, getAll, findById };
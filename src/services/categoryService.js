const Joi = require('joi');

const { Category } = require('../models');

const validateBody = (body) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    const e = new Error('Invalid fields');
    e.message = 'Invalid fields';
    e.status = 400;
    throw e;
  }

  return value;
};

const insert = async (body) => {
  const category = await Category.create(body);
  return category.dataValues;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = { validateBody, insert, getAll };
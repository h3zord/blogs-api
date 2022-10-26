const Joi = require('joi');

const { Category } = require('../models');

const validateBody = (body) => {
  const schema = Joi.object({
    name: Joi.string().required(),
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

const create = async (body) => {
  const category = await Category.create(body);
  return category.dataValues;
};

module.exports = { validateBody, create };
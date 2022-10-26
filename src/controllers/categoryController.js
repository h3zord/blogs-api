const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const body = categoryService.validateBody(req.body);

  const newCategory = await categoryService.create(body);

  res.status(201).json(newCategory);
};

module.exports = { create };
const categoryService = require('../services/categoryService');

const insert = async (req, res) => {
  const body = categoryService.validateBody(req.body);

  const newCategory = await categoryService.insert(body);

  res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
  const categories = await categoryService.getAll();

  res.status(200).json(categories);
};

module.exports = { insert, getAll };
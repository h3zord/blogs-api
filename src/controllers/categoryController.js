const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const body = categoryService.validateBody(req.body);

  const newCategory = await categoryService.create(body);

  res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();

  res.status(200).json(categories);
};

module.exports = { create, getAll };
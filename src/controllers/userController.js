const userService = require('../services/userService');

const create = async (req, res) => {
  const body = userService.validateBody(req.body);

  const token = await userService.validateEmail(body);

  res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  
  const user = await userService.findById(id);

  res.status(200).json(user);
};

module.exports = { create, getAll, findById };
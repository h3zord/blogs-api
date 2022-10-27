const userService = require('../services/userService');

const insert = async (req, res) => {
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

const deleteById = async (req, res) => {
  const { authorization } = req.headers;
  await userService.deleteById(authorization);

  res.status(204).end();
};

module.exports = { insert, getAll, findById, deleteById };
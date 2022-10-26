const userService = require('../services/userService');

const create = async (req, res) => {
  const body = userService.validateBody(req.body);

  const token = await userService.validateEmail(body);

  res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  console.log(users);
  res.status(200).json(users);
};

module.exports = { create, getAll };
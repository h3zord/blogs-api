const userService = require('../services/userService');

const user = async (req, res) => {
  const body = userService.validateBody(req.body);

  const token = await userService.validateEmail(body);

  res.status(201).json({ token });
};

module.exports = { user };
const loginService = require('../services/loginService');

const login = async (req, res) => {
  const body = loginService.validateBody(req.body);

  const token = await loginService.validateLogin(body);

  res.status(200).json({ token });
};

module.exports = { login }; 
const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post(
  '/login',
  loginController.login

  // #swagger.tags = ['Login']
  // #swagger.summary = 'Realizar o login com email e senha e em seguida gerar um token'
  // #swagger.description = 'Endpoint para consultar se o email e a senha fornecidos coincidem com o cadastrado no banco de dados.'

  /* #swagger.parameters['info'] = {
    in: 'body',
    description: 'Informações necessárias para realizar o login.',
    type: 'object',
    schema: { $ref: "#/definitions/Login" },
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/ValidToken" },
    description: 'Requisição para realizar o login efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/InvalidFieldsBodyError" },
    description: 'Erro! A requisição falhou! O email ou a senha informados estão incorretos.'
  } */

   /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/BodyNotFoundError" },
    description: 'Erro! A requisição falhou! Os campos devem estar todos preenchidos corretamente.'
  } */,
  );

module.exports = router;
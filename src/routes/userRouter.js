const express = require('express');
const userController = require('../controllers/userController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post(
  '/user', 
  userController.insert

  // #swagger.tags = ['User']
  // #swagger.summary = 'Criar um novo usuário e gerar um token'
  // #swagger.description = 'Endpoint para criar um novo usuário e cadastrar as informações no banco de dados, e em seguida gerar um token.'

  /* #swagger.parameters['info'] = {
    in: 'body',
    description: 'Informações necessárias para criar um novo usuário.',
    type: 'object',
    schema: { $ref: "#/definitions/CreateUser" },
  } */

  /* #swagger.responses[201] = {
    schema: { $ref: "#/definitions/ValidToken" },
    description: 'Requisição para criar um novo usuário efetuada com sucesso!'
  } */
  
  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/InvalidFieldsBodyError" },
    description: 'Erro! A requisição falhou! Os campos estão ausentes ou preenchidos incorretamente.'
  } */
  
  /* #swagger.responses[409] = {
    schema: { $ref: "#/definitions/InvalidEmailError" },
    description: 'Erro! A requisição falhou! O email informado já está cadastrado no banco de dados.'
  } */,
);

router.get(
  '/user',
  validateToken,
  userController.getAll
  
  // #swagger.tags = ['User']
  // #swagger.summary = 'Listar todos os usuários'
  // #swagger.description = 'Endpoint para listar todos os usuários cadastrados no banco de dados.',

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para criar um novo usuário.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/UserList" },
    description: 'Requisição para listar todos os usuários efetuada com sucesso!'
  } */

  /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/InvalidTokenError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
  } */
  
  /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/TokenNotFoundError" },
    description: 'Erro! A requisição falhou! O token não foi encontrado.'
  } */,
);

router.get(
  '/user/:id',
  validateToken,
  userController.findById
  
  // #swagger.tags = ['User']
  // #swagger.summary = 'Buscar um usuário pelo seu ID'
  // #swagger.description = 'Endpoint para buscar um usuário cadastrado no banco de dados pelo seu ID.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para buscar um usuário pelo seu ID.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para buscar um usuário cadastrado no banco de dados.'
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/User" },
    description: 'Requisição para listar o usuário pelo seu ID efetuada com sucesso!'
  } */
  
  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/UserDoesNotExistError" },
    description: 'Erro! A requisição falhou! O usuário não existe no banco de dados.'
  } */
  
  /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/InvalidTokenError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
  } */
  
  /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/TokenNotFoundError" },
    description: 'Erro! A requisição falhou! O token não foi encontrado.'
  } */,
);

router.delete(
  '/user/:id',
  validateToken,
  userController.deleteById

  // #swagger.tags = ['User']
  // #swagger.summary = 'Deletar um usuário buscando pelo seu ID'
  // #swagger.description = 'Endpoint para deletar um usuário cadastrado no banco de dados buscando pelo seu ID.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para deletar um usuário pelo seu ID.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para deletar um usuário cadastrado no banco de dados.'
  } */

  /* #swagger.responses[204] = {
    description: 'Requisição para deletar um usuário buscando pelo seu ID efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/UserDeleteError" },
    description: 'Erro! A requisição falhou! Verifique se o usuário a ser excluído existe no banco de dados.'
  } */

  /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/InvalidTokenError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
  } */
  
  /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/TokenNotFoundError" },
    description: 'Erro! A requisição falhou! O token não foi encontrado.'
  } */,
);

module.exports = router;
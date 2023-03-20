const express = require('express');
const categoryController = require('../controllers/categoryController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

// router.use(validateToken);

router.post(
  '/categories',
  validateToken,
  categoryController.insert

  // #swagger.tags = ['Category']
  // #swagger.summary = 'Cadastrar uma nova categoria'
  // #swagger.description = 'Endpoint para cadastrar uma nova categoria e cadastrar as informações no banco de dados.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para cadastrar uma nova categoria.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['info'] = {
    in: 'body',
    description: 'Informações necessárias para cadastrar uma nova categoria.',
    type: 'object',
    schema: { $ref: "#/definitions/CreateCategory" },
  } */

  /* #swagger.responses[201] = {
    schema: { $ref: "#/definitions/CreateCategory" },
    description: 'Requisição para cadastrar uma nova categoria efetuada com sucesso!'
  } */
  
  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/InvalidFieldsBodyError" },
    description: 'Erro! A requisição falhou! Os campos estão ausentes ou preenchidos incorretamente.'
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
  '/categories',
  validateToken,
  categoryController.getAll

  // #swagger.tags = ['Category']
  // #swagger.summary = 'Listar todas as categorias'
  // #swagger.description = 'Endpoint para listar todas as categorias cadastradas no banco de dados.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para listar todas as categorias.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

   /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/CategoryList" },
    description: 'Requisição para listar todas as categorias efetuada com sucesso!'
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
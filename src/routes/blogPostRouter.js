/* eslint-disable max-lines */
const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post(
  '/post',
  validateToken,
  blogPostController.insert

  // #swagger.tags = ['Post']
  // #swagger.summary = 'Criar um novo post'
  // #swagger.description = 'Endpoint para criar um novo post e cadastrar as informações no banco de dados.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para criar uma novo post.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['info'] = {
    in: 'body',
    description: 'Informações necessárias para criar um post.',
    type: 'object',
    schema: { $ref: "#/definitions/CreatePost" },
  } */

   /* #swagger.responses[201] = {
    schema: { $ref: "#/definitions/CreatedPost" },
    description: 'Requisição para criar um post efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/BodyNotFoundError" },
    description: 'Erro! A requisição falhou! Os campos estão ausentes ou preenchidos incorretamente.'
  } */

  /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/InvalidTokenError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
  } */
  
  /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/TokenNotFoundError" },
    description: 'Erro! A requisição falhou! O token não foi encontrado.'
  } */

  /* #swagger.responses[422] = {
    schema: { $ref: "#/definitions/CategoryNotFoundError" },
    description: 'Erro! A requisição falhou! Uma ou mais categorias são inválidas.'
  } */,
);

router.get(
  '/post',
  validateToken,
  blogPostController.getAll

  // #swagger.tags = ['Post']
  // #swagger.summary = 'Listar todos os posts'
  // #swagger.description = 'Endpoint para listar todos os posts cadastrados no banco de dados.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para listar todos os posts.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/PostList" },
    description: 'Requisição para listar todos os posts efetuada com sucesso!'
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
  '/post/search',
  validateToken,
  blogPostController.findByQuery

  // #swagger.tags = ['Post']
  // #swagger.summary = 'Buscar todos os posts filtradas pela query'
  // #swagger.description = 'Endpoint para buscar todos os posts cadastrados no banco de dados que contenham em seu título ou conteúdo a palavra fornecida pela query.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para listar os posts por uma query.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['q'] = {
    in: 'query',
    type: 'string',
    default: 'Ano',
    required: 'true',
    description: 'Digite uma palavra para servir de filtro de busca.'
  } */  

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/PostList" },
    description: 'Requisição para buscar um post pelo título ou conteúdo efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/PostDoesNotExistError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
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
  '/post/:id',
  validateToken,
  blogPostController.findById

  // #swagger.tags = ['Post']
  // #swagger.summary = 'Buscar um post pelo seu ID'
  // #swagger.description = 'Endpoint para buscar um post cadastrado no banco de dados pelo seu ID.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para buscar um post pelo seu ID.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para buscar o post cadastrado no banco de dados.'
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/PostObject" },
    description: 'Requisição para buscar um post pelo seu ID efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/PostDoesNotExistError" },
    description: 'Erro! A requisição falhou! Não foi encontrado nenhum post cadastrado no banco de dados com esse ID.'
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

router.put(
  '/post/:id',
  validateToken,
  blogPostController.updateById

  // #swagger.tags = ['Post']
  // #swagger.summary = 'Atualizar um post buscando pelo seu ID'
  // #swagger.description = 'Endpoint para atualizar um post cadastrado no banco de dados buscando pelo seu ID.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para atualizar um post pelo seu ID.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para atualizar o post cadastrado no banco de dados.'
  } */

   /* #swagger.parameters['info'] = {
    in: 'body',
    description: 'Informações necessárias para atualizar um post.',
    type: 'object',
    schema: { $ref: "#/definitions/UpdatePost" },
  } */

   /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/UpdatedPost" },
    description: 'Requisição para atualizar um post pelo seu ID efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/BodyNotFoundError" },
    description: 'Erro! A requisição falhou! Os campos estão ausentes ou preenchidos incorretamente.'
  } */

   /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/InvalidTokenError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
  } */
  
  /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/TokenNotFoundError" },
    description: 'Erro! A requisição falhou! O token não foi encontrado.'
  } */

  /* #swagger.responses[409] = {
    schema: { $ref: "#/definitions/UnauthorizedUserError" },
    description: 'Erro! A requisição falhou! Apenas o autor do post tem permissão para atualizar.'
  } */
  
  /* #swagger.responses[422] = {
    schema: { $ref: "#/definitions/PostDoesNotExistError" },
    description: 'Erro! A requisição falhou! Não foi encontrado nenhum post cadastrado no banco de dados com esse ID.'
  } */,
);

router.delete(
  '/post/:id',
  validateToken,
  blogPostController.deleteById

  // #swagger.tags = ['Post']
  // #swagger.summary = 'Deletar um post buscando pelo seu ID'
  // #swagger.description = 'Endpoint para deletar um post cadastrado no banco de dados buscando pelo seu ID.'

  /* #swagger.parameters['authorization'] = {
    in: 'header',
    description: 'Token necessário para deletar um post pelo seu ID.',
    type: 'string',
    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjc3MjU2Mzc4LCJleHAiOjI1NDExNjk5Nzh9.zQsfHi3KRyF_jjzLq9rMGm3kMxzpbiQGsHE3Dr5IPi4'
  } */

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para deletar o post cadastrado no banco de dados.'
  } */

   /* #swagger.responses[204] = {
    description: 'Requisição para deletar um post pelo seu ID efetuada com sucesso!'
  } */

  /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/InvalidTokenError" },
    description: 'Erro! A requisição falhou! O token fornecido é inválido.'
  } */
  
  /* #swagger.responses[404] = {
    schema: { $ref: "#/definitions/TokenNotFoundError" },
    description: 'Erro! A requisição falhou! O token não foi encontrado.'
  } */

  /* #swagger.responses[409] = {
    schema: { $ref: "#/definitions/UnauthorizedUserError" },
    description: 'Erro! A requisição falhou! Apenas o autor do post tem permissão para deletar.'
  } */

  /* #swagger.responses[422] = {
    schema: { $ref: "#/definitions/PostDoesNotExistError" },
    description: 'Erro! A requisição falhou! Não foi encontrado nenhum post cadastrado no banco de dados com esse ID.'
  } */,
);

module.exports = router;
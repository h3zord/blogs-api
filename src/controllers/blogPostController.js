const blogPostService = require('../services/blogPostService');

const insert = async (req, res) => {
  const value = blogPostService.validateBody(req.body);

  await blogPostService.validateCategories(value.categoryIds);

  const newBlogPost = await blogPostService.insert(value);
  
  res.status(201).json(newBlogPost);
};

const getAll = async (req, res) => {
  const blogPosts = await blogPostService.getAll();

  res.status(200).json(blogPosts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await blogPostService.findById(id);

  res.status(200).json(blogPost);
};

const updateById = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const value = blogPostService.validateBodyUpdate(req.body);
  await blogPostService.validateAuthorization(id, authorization);
  const updatedPost = await blogPostService.updateById(id, value);

  res.status(200).json(updatedPost);
};

const deleteById = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  await blogPostService.validateAuthorization(id, authorization);
  await blogPostService.deleteById(id);

  res.status(204).end();
};

const findByQuery = async (req, res) => {
  const { q } = req.query;
  
  const result = await blogPostService.findByQuery(q);
  console.log(result);
  res.status(200).json(result);
};

module.exports = { insert, getAll, findById, updateById, deleteById, findByQuery };
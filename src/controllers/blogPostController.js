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
  const updatedPost = await blogPostService.updateById(id, authorization, value);

  res.status(200).json(updatedPost);
};

module.exports = { insert, getAll, findById, updateById };
const blogPostService = require('../services/blogPostService');

const insert = async (req, res) => {
  const value = blogPostService.validateBody(req.body);

  await blogPostService.validateCategories(value.categoryIds);

  const newBlogPost = await blogPostService.insert(value);
  console.log(newBlogPost);
  
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

module.exports = { insert, getAll, findById };
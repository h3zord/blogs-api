const Joi = require('joi');
const { sequelize } = require('../models');

const { BlogPost, Category, PostCategory, User } = require('../models');
const { validateToken } = require('../utils/jwtUtil');

const validateBody = (body) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    const e = new Error('Invalid fields');
    e.message = 'Some required fields are missing';
    e.status = 400;
    throw e;
  }

  return value;
};

const validateCategories = async (categories) => {
  await Promise.all(categories.map(async (id) => {
    const category = await Category.findByPk(id);

    if (!category) {
      const e = new Error('Category não existe');
      e.message = 'one or more "categoryIds" not found';
      e.status = 400;
      throw e;
    }
  }));
};

const insert = async (body) => {
  const { title, content, categoryIds } = body;

  try {
    const result = await sequelize.transaction(async (t) => {
      const newBlogPost = await BlogPost.create(
        { title, content }, { transaction: t },
      );

      const bodyWithId = categoryIds.map((categoryId) => ({ categoryId, postId: newBlogPost.id }));

      await PostCategory.bulkCreate(bodyWithId, { transaction: t });

      return newBlogPost;
    });

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({ 
    include: [
      { 
        model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return blogPosts;
};

const findById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, { 
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!blogPost) {
    const e = new Error('Post não existe');
    e.message = 'Post does not exist';
    e.status = 404;
    throw e;
  }

  return blogPost;
};

const validateBodyUpdate = (body) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    const e = new Error('Invalid fields');
    e.message = 'Some required fields are missing';
    e.status = 400;
    throw e;
  }

  return value;
};

const updateById = async (postId, body) => {
  await BlogPost.update(body, { where: { id: postId } });

  const blogPost = await BlogPost.findByPk(postId, { 
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return blogPost;
};

const validateAuthorization = async (postId, token) => {
  const blogPost = await BlogPost.findByPk(postId);

  if (!blogPost) {
    const e = new Error('Post não encontrado');
    e.message = 'Post does not exist';
    e.status = 404;
    throw e;
  }

  const { id: userTokenId } = validateToken(token);
  const { user_id: userId } = await BlogPost.findByPk(postId);

  if (userTokenId !== userId) {
    const e = new Error('Não autorizado');
    e.message = 'Unauthorized user';
    e.status = 401;
    throw e;
  }
};

const deleteById = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
   validateBody, 
   validateCategories, 
   insert, 
   getAll, 
   findById, 
   updateById, 
   validateBodyUpdate,
   validateAuthorization,
   deleteById,
};
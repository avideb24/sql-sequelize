const express = require('express');
const { createBlog, getAllBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

const blogRouter = express.Router();

blogRouter.post('/', createBlog);
blogRouter.get('/', getAllBlogs);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);

module.exports = blogRouter;

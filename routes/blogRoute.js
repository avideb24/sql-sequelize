const express = require('express');
const { createBlog, getAllBlogs, updateBlog, deleteBlog, tableBlogs, getPaginationBlogs } = require('../controllers/blogController');

const blogRouter = express.Router();

blogRouter.post('/', createBlog);
blogRouter.get('/', getAllBlogs);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);
blogRouter.get('/tableBlogs', tableBlogs);
blogRouter.get('/pagination', getPaginationBlogs),

module.exports = blogRouter;

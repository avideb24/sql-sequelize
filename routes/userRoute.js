const express = require('express');
const { createUser, getAllUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getAllUser);

module.exports = userRouter
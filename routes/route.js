const express = require('express');
const homeRoute = require('./homeRoute');
const blogRoute = require('./blogRoute');
const userRoute = require('./userRoute');


const router = express.Router();

router.use('/', homeRoute);
router.use('/blogs', blogRoute)
router.use('/users', userRoute)


module.exports = router;
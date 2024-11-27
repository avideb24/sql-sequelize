const express = require('express');
const homeRoute = require('./homeRoute');
const blogRoute = require('./blogRoutes')


const router = express.Router();

router.use('/', homeRoute);
router.use('/blogs', blogRoute)


module.exports = router;
const express = require('express');

const homeRoute = express.Router();

homeRoute.get('/', async(req, res) => {
    res.send('Server running successfully!')
});

module.exports = homeRoute;
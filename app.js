const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const router = require('./routes/route');


const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000/'
}));

// Routes
app.use('/', router);

// Database Sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB Connected');

    await sequelize.sync();
    console.log('Models synchronized successfully.');

  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = app;

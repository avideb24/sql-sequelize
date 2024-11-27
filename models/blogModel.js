const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const blog = sequelize.define('blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = blog;

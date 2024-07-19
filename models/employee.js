const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConnection'); // Import the configured sequelize instance

const Employee = sequelize.define('Employee', {
  emp_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false
  },
  hire_date: {
    type: DataTypes.DATEONLY
  }
});

module.exports = Employee;

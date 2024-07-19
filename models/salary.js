const { sequelize } = require('../config/dbConnection');
const { DataTypes } = require('sequelize');
const Employee = require('./employee');

const Salary = sequelize.define('Salary', {
  salary_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  emp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: 'emp_id'
    }
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  from_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  to_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
});

module.exports = Salary;

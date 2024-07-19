// models/deptEmp.js
const { sequelize } = require('../config/dbConnection');
const { DataTypes } = require('sequelize');
const Employee = require('./employee'); // Import Employee model
const Department = require('./department'); // Import Department model

const DeptEmp = sequelize.define('DeptEmp', {
  emp_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee, // Reference to Employee model
      key: 'emp_id'
    }
  },
  dep_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Department, // Reference to Department model
      key: 'dep_id'
    }
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  from_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  to_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

Employee.hasMany(DeptEmp, { foreignKey: 'emp_id' });
Department.hasMany(DeptEmp, { foreignKey: 'dep_id' });

module.exports = DeptEmp;

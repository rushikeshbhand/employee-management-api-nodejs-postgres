// models/DeptManager.js
const { sequelize } = require('../config/dbConnection');
const { DataTypes } = require('sequelize');
const Employee = require('./employee'); 
const Department = require('./department');

const DeptManager = sequelize.define('DeptManager', {
  mgr_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  manager_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  emp_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee,
      key: 'emp_id'
    }
  },
  dep_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Department,
      key: 'dep_id'
    }
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  from_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  to_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// Define associations
Employee.hasMany(DeptManager, { foreignKey: 'emp_id' });
Department.hasMany(DeptManager, { foreignKey: 'dep_id' });
DeptManager.belongsTo(Employee, { foreignKey: 'emp_id' });
DeptManager.belongsTo(Department, { foreignKey: 'dep_id' });

module.exports = DeptManager;

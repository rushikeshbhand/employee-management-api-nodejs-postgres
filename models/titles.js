const { sequelize } = require('../config/dbConnection');
const { DataTypes } = require('sequelize');
const Employee = require('./employee'); // Assuming Employee model is defined and exported

const Title = sequelize.define('Title', {
  title_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  emp_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee,
      key: 'emp_id'
    },
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  from_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  to_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
});

Employee.hasMany(Title, { foreignKey: 'emp_id' });
Title.belongsTo(Employee, { foreignKey: 'emp_id' });

module.exports = Title;

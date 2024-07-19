const {sequelize} = require('../config/dbConnection')
const {DataTypes} = require('sequelize')

const Department = sequelize.define('Department',{
    dep_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dep_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

module.exports = Department;
const { Sequelize } = require('sequelize');  // Destructure Sequelize from the require call
require('dotenv').config();  // Add parentheses to call the config function

const sequelize = new Sequelize('employee-management', 'postgres', 'rushikesh', {
  host: 'localhost',
  dialect: 'postgres' // Ensure dialect is a string
});

// Check if connection to the database was successful
const syncDatabase = async ()=> {
    try {
        await sequelize.sync({ force: false})
        console.log("Database and tables create successfully");
    }catch(e){
        console.error("Error connecting to the database", e);
    }
}
module.exports = {sequelize, syncDatabase};

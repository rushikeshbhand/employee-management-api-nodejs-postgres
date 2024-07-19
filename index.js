const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config
require('./config/dbConnection')
const { syncDatabase } = require('./config/dbConnection'); // Import the syncDatabase function

const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
const titleRoutes = require('./routes/titleRoutes');
const departmentEmployeeRoutes = require('./routes/departmentEmployeeRoutes');
const departmentMangerRoutes = require('./routes/departmentManagerRoutes');

require('./config/dbConnection');
app.use(bodyParser.json());


app.use('/employee', employeeRoutes)
app.use('/department', departmentRoutes)
app.use('/salary', salaryRoutes)
app.use('/title', titleRoutes)
app.use('/departmentEmployee', departmentEmployeeRoutes)
app.use('/departmentManager', departmentMangerRoutes)

syncDatabase().then(() => {
    app.listen(process.env.PORT, (req, res) => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
});
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Define routes and map them to controller functions
router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;

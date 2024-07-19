const Employee = require('../models/employee')

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const { first_name, last_name, gender, hire_date } = req.body;
    console.log("log data "+ first_name, last_name, gender, hire_date);
    const newEmployee = await Employee.create({
      first_name,
      last_name,
      gender,
      hire_date
    });
    console.log("first employee"+newEmployee);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, gender, hire_date } = req.body;
    const [updated] = await Employee.update(
      { first_name, last_name, gender, hire_date },
      { where: { emp_id: id } }
    );
    if (updated) {
      const updatedEmployee = await Employee.findByPk(id);
      res.status(200).json(updatedEmployee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Employee.destroy({ where: { emp_id: id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Department = require('../models/department');

// Create a new department
exports.createDepartment = async (req, res) => {
  try {
    const { dep_name } = req.body;
    const newDepartment = await Department.create({ dep_name });
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all departments
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single department by ID
exports.getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a department by ID
exports.updateDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_name } = req.body;
    const [updated] = await Department.update({ dep_name }, { where: { dep_id: id } });
    if (updated) {
      const updatedDepartment = await Department.findByPk(id);
      res.status(200).json(updatedDepartment);
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a department by ID
exports.deleteDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Department.destroy({ where: { dep_id: id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

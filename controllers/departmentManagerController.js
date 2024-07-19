// controllers/deptManagerController.js
const DeptManager = require('../models/departmentManager');

// Create a new department manager
exports.createDeptManager = async (req, res) => {
  try {
    const { manager_name, emp_id, dep_id, title, from_date, to_date } = req.body;
    const newDeptManager = await DeptManager.create({
      manager_name,
      emp_id,
      dep_id,
      title,
      from_date,
      to_date
    });
    res.status(201).json(newDeptManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all department managers
exports.getAllDeptManagers = async (req, res) => {
  try {
    const deptManagers = await DeptManager.findAll();
    res.status(200).json(deptManagers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single department manager by ID
exports.getDeptManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    const deptManager = await DeptManager.findByPk(id);
    if (deptManager) {
      res.status(200).json(deptManager);
    } else {
      res.status(404).json({ message: 'DeptManager not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a department manager by ID
exports.updateDeptManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    const { manager_name, emp_id, dep_id, title, from_date, to_date } = req.body;
    const [updated] = await DeptManager.update(
      { manager_name, emp_id, dep_id, title, from_date, to_date },
      { where: { mgr_id: id } }
    );
    if (updated) {
      const updatedDeptManager = await DeptManager.findByPk(id);
      res.status(200).json(updatedDeptManager);
    } else {
      res.status(404).json({ message: 'DeptManager not found' });
    }
  } catch (error) {
    res.status  .json({ error: error.message });
  }
};

// Delete a department manager by ID
exports.deleteDeptManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DeptManager.destroy({ where: { mgr_id: id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'DeptManager not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

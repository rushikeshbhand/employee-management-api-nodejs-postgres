// controllers/deptEmpController.js
const DeptEmp = require('../models/departmentEmployee');

// Create a new dept_emp entry
exports.createDeptEmp = async (req, res) => {
  try {
    const { emp_id, dep_id, title, from_date, to_date } = req.body;
    const newDeptEmp = await DeptEmp.create({
      emp_id,
      dep_id,
      title,
      from_date,
      to_date
    });
    res.status(201).json(newDeptEmp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all dept_emp entries
exports.getAllDeptEmp = async (req, res) => {
  try {
    const deptEmps = await DeptEmp.findAll();
    res.status(200).json(deptEmps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single dept_emp entry by ID
exports.getDeptEmpById = async (req, res) => {
  try {
    const { id } = req.params;
    const deptEmp = await DeptEmp.findByPk(id);
    if (deptEmp) {
      res.status(200).json(deptEmp);
    } else {
      res.status(404).json({ message: 'DeptEmp not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a dept_emp entry by ID
exports.updateDeptEmpById = async (req, res) => {
  try {
    const { id } = req.params;
    const { emp_id, dep_id, title, from_date, to_date } = req.body;
    const [updated] = await DeptEmp.update(
      { emp_id, dep_id, title, from_date, to_date },
      { where: { id } }
    );
    if (updated) {
      const updatedDeptEmp = await DeptEmp.findByPk(id);
      res.status(200).json(updatedDeptEmp);
    } else {
      res.status(404).json({ message: 'DeptEmp not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a dept_emp entry by ID
exports.deleteDeptEmpById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DeptEmp.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'DeptEmp not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

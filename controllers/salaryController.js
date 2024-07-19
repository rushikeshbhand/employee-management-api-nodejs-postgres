const Salary = require('../models/salary');

// Create a new salary record
exports.createSalary = async (req, res) => {
  try {
    const { emp_id, salary, from_date, to_date } = req.body;
    const newSalary = await Salary.create({
      emp_id,
      salary,
      from_date,
      to_date
    });
    res.status(201).json(newSalary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all salary records
exports.getAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.findAll();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single salary record by ID
exports.getSalaryById = async (req, res) => {
  try {
    const { id } = req.params;
    const salary = await Salary.findByPk(id);
    if (salary) {
      res.status(200).json(salary);
    } else {
      res.status(404).json({ message: 'Salary record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a salary record by ID
exports.updateSalaryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { emp_id, salary, from_date, to_date } = req.body;
    const [updated] = await Salary.update(
      { emp_id, salary, from_date, to_date },
      { where: { salary_id: id } }
    );
    if (updated) {
      const updatedSalary = await Salary.findByPk(id);
      res.status(200).json(updatedSalary);
    } else {
      res.status(404).json({ message: 'Salary record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a salary record by ID
exports.deleteSalaryById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Salary.destroy({ where: { salary_id: id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Salary record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

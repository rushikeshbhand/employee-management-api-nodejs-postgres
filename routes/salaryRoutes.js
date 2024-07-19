const express = require('express');
const router = express.Router();
const salaryController = require('../controllers/salaryController');

router.post('/', salaryController.createSalary);
router.get('/', salaryController.getAllSalaries);
router.get('/:id', salaryController.getSalaryById);
router.put('/:id', salaryController.updateSalaryById);
router.delete('/:id', salaryController.deleteSalaryById);

module.exports = router;

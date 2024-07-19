// routes/deptEmpRoutes.js
const express = require('express');
const router = express.Router();
const deptEmpController = require('../controllers/departmentEmployeeController');

router.post('/', deptEmpController.createDeptEmp);
router.get('/', deptEmpController.getAllDeptEmp);
router.get('/:id', deptEmpController.getDeptEmpById);
router.put('/:id', deptEmpController.updateDeptEmpById);
router.delete('/:id', deptEmpController.deleteDeptEmpById);

module.exports = router;

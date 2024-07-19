// routes/deptManagerRoutes.js
const express = require('express');
const router = express.Router();
const deptManagerController = require('../controllers/departmentManagerController');

router.post('/', deptManagerController.createDeptManager);
router.get('/', deptManagerController.getAllDeptManagers);
router.get('/:id', deptManagerController.getDeptManagerById);
router.put('/:id', deptManagerController.updateDeptManagerById);
router.delete('/:id', deptManagerController.deleteDeptManagerById);

module.exports = router;

const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController');

router.post('/', titleController.createTitle);
router.get('/', titleController.getAllTitles);
router.get('/:id', titleController.getTitleById);
router.put('/:id', titleController.updateTitleById);
router.delete('/:id', titleController.deleteTitleById);

module.exports = router;

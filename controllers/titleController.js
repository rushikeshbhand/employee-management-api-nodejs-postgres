const Title = require('../models/titles');

// Create a new title
exports.createTitle = async (req, res) => {
  try {
    const { emp_id, title, from_date, to_date } = req.body;
    const newTitle = await Title.create({
      emp_id,
      title,
      from_date: from_date || new Date(),
      to_date: to_date || new Date()
    });
    res.status(201).json(newTitle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all titles
exports.getAllTitles = async (req, res) => {
  try {
    const titles = await Title.findAll();
    res.status(200).json(titles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single title by ID
exports.getTitleById = async (req, res) => {
  try {
    const { id } = req.params;
    const title = await Title.findByPk(id);
    if (title) {
      res.status(200).json(title);
    } else {
      res.status(404).json({ message: 'Title not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a title by ID
exports.updateTitleById = async (req, res) => {
  try {
    const { id } = req.params;
    const { emp_id, title, from_date, to_date } = req.body;
    const [updated] = await Title.update(
      { emp_id, title, from_date, to_date },
      { where: { title_id: id } }
    );
    if (updated) {
      const updatedTitle = await Title.findByPk(id);
      res.status(200).json(updatedTitle);
    } else {
      res.status(404).json({ message: 'Title not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a title by ID
exports.deleteTitleById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Title.destroy({ where: { title_id: id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Title not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

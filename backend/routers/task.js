const { Router } = require('express');

const taskController = Router();
const { taskModel } = require('../models/taskModel');

taskController.post('/new', async (req, res) => {
  try {
    const addtask = await taskModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'task added successfully', addtask });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

module.exports = { taskController };

const express = require('express');
const { TaskModel } = require('../models/taskModel');
const taskControler = express.Router();

taskControler.get('/', async (req, res) => {
  try {
    const taskList = await TaskModel.find();
    return res.status(200).send(taskList);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

taskControler.post('/new', async (req, res) => {
  try {
    const newtask = await TaskModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'task added successfully', newtask });
  } catch (err) {
    return res.status(500).send('task added failed');
  }
});

taskControler.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedtask = await TaskModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).send({ message: 'task Updated', updatedtask });
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
});

taskControler.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
});

module.exports = {taskControler};

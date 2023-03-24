const express = require('express');
const { SprintModel } = require('../models/sprintModel');

const sprintControler = express.Router();

sprintControler.get('/', async (req, res) => {
  try {
    const sprintList = await SprintModel.find();
    return res.status(200).send(sprintList);
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

sprintControler.post('/new', async (req, res) => {
  try {
    const newSprint = await SprintModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'client added successfully', newSprint });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

sprintControler.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updateSprint = await SprintModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    return res
      .status(200)
      .send({ message: 'client updated successfully', updateSprint });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

sprintControler.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await SprintModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ message: 'client deleted successfully' });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

module.exports = { sprintControler };

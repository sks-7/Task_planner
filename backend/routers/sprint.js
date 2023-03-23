const { Router } = require('express');

const sprintController = Router();
const { sprintModel } = require('../models/sprintModel');


sprintController.post('/new', async (req, res) => {
  try {
    const addSprint = await sprintModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'Sprint added successfully', addSprint });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});


sprintController.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedClient = await sprintModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    return res
      .status(200)
      .send({ message: 'client updated successfully', updatedClient });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});


module.exports = { sprintController };

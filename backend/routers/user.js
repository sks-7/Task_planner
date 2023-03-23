const { Router } = require('express');

const userController = Router();
const { userModel } = require('../models/userModel');

userController.post('/new', async (req, res) => {
  try {
    const addUser = await userModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'User Added added successfully', addUser });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

userController.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedClient = await userModel.findByIdAndUpdate(
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

module.exports = { userController };

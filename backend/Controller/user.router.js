const express = require('express');
const { UserModel } = require('../models/userModel');

const userControler = express.Router();

userControler.get('/', async (req, res) => {
  try {
    const userList = await UserModel.find();
    return res.status(200).send(userList);
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

userControler.post('/new', async (req, res) => {
  try {
    const newUesr = await UserModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'User added successfully', newUesr });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

userControler.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    return res
      .status(200)
      .send({ message: 'User updated successfully', updateUser });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

userControler.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

module.exports = { userControler };

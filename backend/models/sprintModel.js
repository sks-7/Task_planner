const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  
});

const SprintModel = mongoose.model('sprint', sprintSchema);

module.exports = { SprintModel };

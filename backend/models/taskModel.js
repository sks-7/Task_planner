const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: {
      type: Boolean,
      default: false,
    },

    userName: { type: String },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model('task', taskSchema);

module.exports = { TaskModel };

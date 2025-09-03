const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ""
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"], 
    default: "Low"
  },
  category: {
    type: String,
    enum: ["Work", "Personal", "Academic", "Other"], 
    default: "Other"
  },
  dueDate: {
    type: Date,
    default: null
  },
  tags: {
    type: [String],
    default: []
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true }); 

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
module.exports = Task;
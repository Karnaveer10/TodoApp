const express = require('express');
const cors = require('cors')
require('dotenv').config()
const app = express();
app.use(express.json())
app.use(cors())
const router = express.Router();
// const path = require('path');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const connectDB = require('./config/connectDb')
const port = process.env.PORT || 3000;
const Task = require('./models/TaskModel');
connectDB()


app.get("/", (req, res) => {
  res.send("API Working")
})
app.get('/api/getTasks', async (req, res) => {
  try {
    const Taskdocs = await Task.find({})
    res.json(Taskdocs)
  }
  catch (error) {
    console.log(error)
    res.json({ success: false })
  }

})
app.post('/api/addTask', async (req, res) => {
  try {
    const { title, description, priority, category, dueDate, tags, completed } = req.body
    const newTask = await Task.create({
      title,
      description,
      priority,
      category,
      dueDate,
      tags,
      completed,
      completedAt: completed ? new Date() : null
    });
    await newTask.save();

    res.json({ success: true })
  }
  catch (error) {
    console.log(error)
    res.send({ success: false })
  }
})
app.post('/api/deleteTask', async (req, res) => {

  const { id } = req.body
  try {
    const delDoc = await Task.findByIdAndDelete(id);
    res.json({ success: true })
  } catch (error) {
    console.log(error)
    res.json({ success: false })
  }

})
app.get('/api/gettaskbyid/:id', async (req, res) => {
  const { id } = req.params
  try {

    const Taskdoc = await Task.findById(id)
    res.json(Taskdoc)
  }
  catch (error) {
    console.log(error)
    res.json({ success: false })
  }

})
app.post('/api/updateTask', async (req, res) => {
  const { form, id } = req.body;

  try {
    if (id) {
      // Update existing task
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        {
          title: form.title,
          description: form.description,
          priority: form.priority,
          category: form.category,
          dueDate: form.dueDate ? new Date(form.dueDate) : null,
          tags: form.tags,
          completed: form.completed,
          completedAt: form.completed ? new Date() : null
        },
        { new: true } // return the updated document
      );
      res.json({ success: true });
    } 
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
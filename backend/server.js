const express = require('express');
const cors = require('cors')
require('dotenv').config()
const app = express();
app.use(express.json())
app.use(cors())
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const connectDB = require('./config/connectDb')
const port = process.env.PORT || 3000;
const Task = require('./models/TaskModel');
// const authenticateJWT = require('./middleware/auth');
// const axios = require ('axios')
// const User = require ('./models/UserModel')
connectDB()


app.get("/", (req, res) => {
  res.send("API Working")
})

// app.post('/api/google-login', async (req, res) => {
//   const { idToken } = req.body;

//   try {
//     const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
//     const { email, sub: googleId, name } = response.data;

//     let user = await User.findOne({ googleId });
//     if (!user) {
//       user = await User.create({ googleId, email, name });
//     }
//     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_TOKEN_SECRET, { expiresIn: '7d' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: 'Invalid Google ID token' });
//   }
// });


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
        { new: true } 
      );
      res.json({ success: true });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
});
app.post('/api/completeTask', async (req, res) => {
  try {
    const { id } = req.body
    const task = await Task.findByIdAndUpdate(id, {
      completed: true
    })
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false })
  }

})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
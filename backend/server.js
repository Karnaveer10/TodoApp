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
app.get('/api/getTasks',  async(req,res)=>{
    const Taskdocs = await Task.find({})
    console.log(Taskdocs)
})
app.post('/api/addTask', async(req,res)=>{
  try{
  const {title,description,priority,category,dueDate,tags,completed} = req.body
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

    res.json({success:true})
  }
  catch (error){
    console.log(error)
    res.send({success:false})
  }
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
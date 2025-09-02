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


connectDB()


app.get("/", (req, res) => {
  res.send("API Working")
})
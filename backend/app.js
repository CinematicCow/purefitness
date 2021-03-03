// Import required files
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const connectDB = require("./api/database/db")

// Load config
require("dotenv").config()

// Initialize app
const app = express()

//connect DB
connectDB()

// Import Routes
const trainerRoutes = require("./api/routes/Trainers")

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(morgan("dev"))

// Routes
app.get("/", (req, res) => {
  res.json({ message: "elo from the other side" })
})

app.use("/trainers", trainerRoutes)

module.exports = app

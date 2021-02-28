const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "elo from the other side",
  })
})

module.exports = app

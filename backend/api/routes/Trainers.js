const express = require("express")
const trainerRouter = express.Router()
const Trainer = require("../database/models/trainerModel")

// @desc Get all Trainers
// @route GET /trainers/
trainerRouter.get("/", (req, res, next) => {
  Trainer.find()
    .then((docs) => {
      console.log(docs)
      res.status(200).json(docs)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

// @desc Add new Trainer
// @route POST /trainers/add
trainerRouter.post("/add", (req, res, next) => {
  const params = req.body
  const trainer = new Trainer({
    name: params.name,
    type: params.type,
    about: params.about,
    image: params.image,
    social: [{}],
  })
})

module.exports = trainerRouter

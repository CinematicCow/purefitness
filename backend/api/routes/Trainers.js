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
trainerRouter.post("/add", async (req, res, next) => {
  const params = req.body
  const { name, type, about, image, social } = req.body

  const trainer = new Trainer({
    name,
    type,
    about,
    image,
    social: {
      instagram: social.instagram,
      facebook: social.facebook,
      twitter: social.twitter,
    },
  })

  const data = await trainer.save()
  if (data) {
    res.status(201).json({
      message: "Trainer Created",
      data: data,
    })
  } else {
    res.status(500).json({
      message: "Error, mattu gandu!",
    })
  }
})

module.exports = trainerRouter

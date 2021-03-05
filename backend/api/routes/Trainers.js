const express = require("express")
const trainerRouter = express.Router()
const Trainer = require("../database/models/trainerModel")

// @desc Get all Trainers
// @route GET /trainers/
trainerRouter.get("/", (req, res, next) => {
  Trainer.find()
    // .select("_id name type about social")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        trainers: docs.map((doc) => {
          const { _id, name, type, about, social } = doc
          return {
            _id,
            name,
            type,
            about,
            social,
          }
        }),
      }
      if (docs.length >= 0) {
        res.status(200).json(response)
      } else {
        res.status(404).json({
          message: "No entries found",
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

// @desc Get a Trainer
// @route GET /trainers/:id
trainerRouter.get("/:trainerID", (req, res, next) => {
  const id = req.params.trainerID
  Trainer.findById(id)
    .exec()
    .then((doc) => {
      //console.log("from DB", doc)
      if (doc) {
        const { _id, name, type, about, image, created_at, social } = doc
        res.status(200).json({
          trainer: {
            _id,
            name,
            type,
            about,
            image,
            created_at,
            social,
          },
        })
      } else {
        res.status(404).json({
          message: "No valid entry found for provided Id",
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})

// @desc Add new Trainer
// @route POST /trainers/add
trainerRouter.post("/add", (req, res, next) => {
  const params = req.body
  const { name, type, about, image, social } = req.body

  const trainer = new Trainer({
    name,
    type,
    about,
    image,
    social,
  })

  trainer
    .save()
    .then((result) => {
      console.log(result)
      res.status(201).json({
        message: "Trainer created successfully",
        result,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

// @desc Update a Trainer
// @route PUT /trainers/edit/:id
trainerRouter.put("/edit/:trainerID", async (req, res, next) => {
  const id = req.params.trainerID

  Trainer.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Trainer updated",
        trainer: result,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })

  // const updateOps = {}
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value
  // }

  // Trainer.findOneAndUpdate({ _id: id }, { $set: updateOps })
})

// @desc Delete a trainer
// @route DELETE /trainers/:id
trainerRouter.delete("/:trainerID", (req, res, next) => {
  const id = req.params.trainerID
  Trainer.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Trainer deleted",
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

module.exports = trainerRouter

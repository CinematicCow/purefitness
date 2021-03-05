const express = require("express")
const programRouter = express.Router()
const Program = require("../database/models/programModel")

//* @desc Get all Programs
//* @route GET /

programRouter.get("/", (req, res, next) => {
  Program.find()
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        programs: docs.map((doc) => {
          const { _id, name, icon, description } = doc
          return {
            _id,
            name,
            icon,
            description,
          }
        }),
      }
      if (docs.length > 0) {
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

//* @desc Get a Program
//* @route GET /:id
programRouter.get("/:programID", (req, res, next) => {
  const id = req.params.programID
  Program.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        const { _id, name, icon, description } = doc
        res.status(200).json({
          program: {
            _id,
            name,
            icon,
            description,
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
      res.status(500).json({
        error: err,
      })
    })
})

//*  @desc Add a Program
//* @route POST /add
programRouter.post("/add", (req, res, next) => {
  const { name, icon, description } = req.body

  const program = new Program({
    name,
    icon,
    description,
  })

  program
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Program added successfully",
        program: {
          name: result.name,
          icon: result.icon,
          description: result.description,
        },
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

//* @desc Update a Program
//* @route PUT /edit/:id
programRouter.put("/edit/:programID", (req, res, next) => {
  const id = req.params.programID
  Program.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Program updated",
        program: result,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

//* @desc Delete a Program
//* @route /:id
programRouter.delete("/:programID", (req, res, next) => {
  const id = req.params.programID
  Program.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Program deleted",
      })
    })
    .catch()
})

module.exports = programRouter

const express = require("express")
const priceRouter = express.Router()
const Price = require("../database/models/priceModel")

//* @desc Get all Prices
//* @route GET /
priceRouter.get("/", (req, res, next) => {
  Price.find()
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        prices: docs.map((doc) => {
          const { _id, name, price, description, more_prices } = doc
          return {
            _id,
            name,
            price,
            description,
            more_prices,
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

//* @desc Get a Price
//* @route GET /:id
priceRouter.get("/:priceID", (req, res, next) => {
  const id = req.params.priceID
  Price.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        const { _id, name, price, description, more_prices } = doc
        res.status(200).json({
          price: {
            _id,
            name,
            price,
            description,
            more_prices,
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

//*  @desc Add a Price
//* @route POST /add
priceRouter.post("/add", (req, res, next) => {
  const { name, price, description, more_prices } = req.body

  const money = new Price({
    name,
    price,
    description,
    more_prices,
  })

  money
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Price added successfully",
        price: {
          name: result.name,
          price: result.price,
          description: result.description,
          more_prices: result.more_prices,
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

//* @desc Update a Price
//* @route PUT /edit/:id
priceRouter.put("/edit/:priceID", (req, res, next) => {
  const id = req.params.priceID
  Price.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Price updated",
        price: result,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

//* @desc Delete a Price
//* @route /:id
priceRouter.delete("/:priceID", (req, res, next) => {
  const id = req.params.priceID
  Price.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Price deleted",
      })
    })
    .catch()
})

module.exports = priceRouter

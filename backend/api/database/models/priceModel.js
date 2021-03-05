const mongoose = require("mongoose")

const priceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  more_prices: [
    {
      duration: String,
      price: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // created_by: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
})

module.exports = mongoose.model("Price", priceSchema)

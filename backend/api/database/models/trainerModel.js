const mongoose = require("mongoose")

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  social: {
    instagram: String,
    facebook: String,
    twitter: String,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model("Trainer", trainerSchema)

const mongoose = require("mongoose")

const programSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  // created_by: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
})

module.exports = mongoose.model("Program", programSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema


const Bike = new Schema(
  {
    task: { type: String, required: true },
  },
  { 
    make: string,
    model: string 
  }
)

module.exports = mongoose.model("bikes", Bike)

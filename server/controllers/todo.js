const Bike = require("../models/todo")

/**
 *
 * Mongoose API
 *
 * Create document - returns a promise
 * const document = await <model>.create({task: 'value'})
 * Save document
 * <document>.save()
 *
 */
createBike = async (req, res) => {
  return res.status(500).json({ success: false })
}

/**
 *
 * Mongoose API
 *
 * Get documents - returns a promise
 * const documents = await <model>.find({})
 *
 */
getBikes = async (req, res) => { // Mongoose API
  const arr = await Bike.find(); //MongoDB
  if(arr.length > 0 ){
    return res.send({data: arr})
  }
  return res.status(404).json({ success: true })
}

/**
 *
 * Mongoose API
 *
 * Update document - returns a promise
 * const documents = await <model>.findOneAndUpdate({ _id: <id to update>}, {task: 'updated value'})
 *
 */
updateBike = async (req, res) => {
  return res.status(500).json({ success: false })
}

/**
 *
 * Mongoose API
 *
 * Delete document - returns a promise
 * const documents = await <model>.findOneAndDelete({ _id: <id to update>})
 *
 */
deleteBike = async (req, res) => {
  return res.status(500).json({ success: false })
}

module.exports = {
  createBike,
  getBikes,
  updateBike,
  deleteBike,
}

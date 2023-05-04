const express = require("express")

const TodoController = require("../controllers/todo")

const router = express.Router()

// Create
router.post("/Getbikes", TodoController.createBike)

// Read
router.get("/bikes", TodoController.getBikes)

// Update
router.put("/bike/:id", TodoController.updateBike)

// Delete
router.delete("/bike/:id", TodoController.deleteBike)

module.exports = router

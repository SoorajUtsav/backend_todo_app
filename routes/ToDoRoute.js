// /routes/routes.js
const express = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");
const router = express.Router();

//End Points
router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.delete("/delete", deleteToDo);

module.exports = router;

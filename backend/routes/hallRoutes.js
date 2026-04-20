const express = require("express");
const router = express.Router();
const Hall = require("../models/Hall");
const Exam = require("../models/Exam");

router.post("/", async (req, res) => {
  const hall = new Hall(req.body);
  await hall.save();
  res.json(hall);
});

router.get("/", async (req, res) => {
  const halls = await Hall.find();
  res.json(halls);
});

router.delete("/:id", async (req, res) => {
  try {
    const hallId = req.params.id;

    // Delete all exams related to this hall
    await Exam.deleteMany({ hall: hallId });

    // Delete the hall
    await Hall.findByIdAndDelete(hallId);
    
    res.json({ message: "Hall and related exams deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting hall" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject");
const Exam = require("../models/Exam");

// ADD SUBJECT
router.post("/", async (req, res) => {
  try {
    const { subject_name, subject_code, total_students } = req.body;

    if (!subject_name || !subject_code || !total_students) {
      return res.status(400).json({ message: "All fields required" });
    }

    const subject = new Subject({
      subject_name,
      subject_code,
      total_students
    });

    await subject.save();
    res.json(subject);

  } catch (err) {
    res.status(500).json({ message: "Error adding subject" });
  }
});

// GET ALL SUBJECTS
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching subjects" });
  }
});

// DELETE SUBJECT
router.delete("/:id", async (req, res) => {
  try {
    const subjectId = req.params.id;

    // Delete all exams related to this subject
    await Exam.deleteMany({ subject: subjectId });

    // Delete the subject
    await Subject.findByIdAndDelete(subjectId);
    
    res.json({ message: "Subject and related exams deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting subject" });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true
  },
  subject_code: {
    type: String,
    required: true
  },
  total_students: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Subject", subjectSchema);

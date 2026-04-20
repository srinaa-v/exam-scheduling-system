const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const subjectRoutes = require("./routes/subjectRoutes");
const hallRoutes = require("./routes/hallRoutes");
const examRoutes = require("./routes/examRoutes");

const app = express();

app.use(cors({
  origin: "https://exam-scheduling-system.onrender.com",
  credentials: true
}));
app.use(express.json());

mongoose.connect("mongodb+srv://srinaa:srinaa@cluster0.jplg1h7.mongodb.net/examScheduling?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/subjects", subjectRoutes);
app.use("/api/halls", hallRoutes);
app.use("/api/exams", examRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

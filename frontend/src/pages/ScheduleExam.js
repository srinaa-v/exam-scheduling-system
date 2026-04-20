import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "./ScheduleExam.css";

function ScheduleExam() {
  const [subjects, setSubjects] = useState([]);
  const [halls, setHalls] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedHall, setSelectedHall] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    fetchSubjects();
    fetchHalls();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/subjects`);
      setSubjects(res.data);
    } catch (error) {
      console.error("Error fetching subjects");
    }
  };

  const fetchHalls = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/halls`);
      setHalls(res.data);
    } catch (error) {
      console.error("Error fetching halls");
    }
  };

  const createExam = async () => {
    if (!selectedSubject || !selectedHall || !date || !startTime || !endTime) {
      alert("Please fill all fields");
      return;
    }

    if (startTime >= endTime) {
      alert("End time must be greater than start time");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/exams`, {
        subject: selectedSubject,
        hall: selectedHall,
        date,
        start_time: startTime,
        end_time: endTime,
      });

      alert("Exam Scheduled Successfully ✅");

      setSelectedSubject("");
      setSelectedHall("");
      setDate("");
      setStartTime("");
      setEndTime("");

    } catch (error) {
      alert(error.response?.data?.message || "Error scheduling exam");
    }
  };

  return (
    <div className="schedule-container">   {/* 👈 NEW */}
      <div className="schedule-card">

        <h2>📅 Schedule Exam</h2>

          <div className="form-group">
            <label>Select Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">-- Select Subject --</option>
              {subjects.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.subject_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Hall</label>
            <select
              value={selectedHall}
              onChange={(e) => setSelectedHall(e.target.value)}
            >
              <option value="">-- Select Hall --</option>
              {halls.map((hall) => (
                <option key={hall._id} value={hall._id}>
                  {hall.hall_name} (Capacity: {hall.capacity})
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <button onClick={createExam}>Schedule Exam</button>

        </div>
      </div>
  );
}

export default ScheduleExam;
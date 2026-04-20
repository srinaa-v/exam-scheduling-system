import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "./ExamTimetable.css";

function ExamTimetable() {

  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/exams`);
      setExams(res.data);
    } catch (error) {
      console.error("Error fetching exams");
    }
  };

  // Time convert to AM / PM
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${minute} ${ampm}`;
  };

  return (
    <div>

      <h2>📅 Exam Timetable</h2>

      <table className="exam-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Hall</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>

        <tbody>
          {exams.map((exam) => (
            <tr key={exam._id}>
              <td>{exam.subject?.subject_name}</td>
              <td>{exam.hall?.hall_name}</td>
              <td>{exam.date}</td>
              <td>{formatTime(exam.start_time)}</td>
              <td>{formatTime(exam.end_time)}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ExamTimetable;
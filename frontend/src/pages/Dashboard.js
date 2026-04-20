import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { API_BASE_URL } from "../config";
import "./Dashboard.css";

function Dashboard() {
  const [subjectCount, setSubjectCount] = useState(0);
  const [hallCount, setHallCount] = useState(0);
  const [examCount, setExamCount] = useState(0);

  const [upcomingExams, setUpcomingExams] = useState([]);

  useEffect(() => {
    fetchCounts();
  }, []);

  // Time convert to AM / PM
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${minute} ${ampm}`;
  };

  const fetchCounts = async () => {
    try {
      const subjects = await axios.get(`${API_BASE_URL}/api/subjects`);
      const halls = await axios.get(`${API_BASE_URL}/api/halls`);
      const exams = await axios.get(`${API_BASE_URL}/api/exams`);

      setSubjectCount(subjects.data.length);
      setHallCount(halls.data.length);
      setExamCount(exams.data.length);

      const today = new Date().toISOString().split("T")[0];

      const upcoming = exams.data.filter((exam) => {
        return exam.date >= today;
      });

      setUpcomingExams(upcoming);

    } catch (error) {
      console.error("Error fetching dashboard data", error);
    }
  };

  return (
    <Layout>
      <h3>Admin Dashboard</h3>

      <div className="cards">
        <div className="card subjects">
          <h4>Total Subjects</h4>
          <p>{subjectCount}</p>
        </div>

        <div className="card halls">
          <h4>Total Halls</h4>
          <p>{hallCount}</p>
        </div>

        <div className="card exams">
          <h4>Total Exams</h4>
          <p>{examCount}</p>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h4>Upcoming Exams</h4>

        {upcomingExams.length === 0 ? (
          <p>No upcoming exams</p>
        ) : (
          <ul className="upcoming-exams">
            {upcomingExams.map((exam) => (
              <li key={exam._id}>
                {exam.subject?.subject_name || exam.subject?.name} - {exam.date} 
                ({formatTime(exam.start_time)} - {formatTime(exam.end_time)})
              </li>
            ))}
          </ul>
        )}
      </div>

    </Layout>
  );
}

export default Dashboard;
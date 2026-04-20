import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ManageHalls from "./pages/ManageHalls";
import ManageSubjects from "./pages/ManageSubjects";
import ScheduleExam from "./pages/ScheduleExam";
import ExamTimetable from "./pages/ExamTimetable";
import StudentDashboard from "./pages/StudentDashboard";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Router>

      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />


        {/* ADMIN ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subjects"
          element={
            <ProtectedRoute>
              <Layout>
                <ManageSubjects />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/halls"
          element={
            <ProtectedRoute>
              <Layout>
                <ManageHalls />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <Layout>
                <ScheduleExam />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/timetable"
          element={
            <ProtectedRoute>
              <Layout>
                <ExamTimetable />
              </Layout>
            </ProtectedRoute>
          }
        />


        {/* STUDENT ROUTES */}

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <StudentDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/student-timetable"
          element={
            <ProtectedRoute>
              <Layout>
                <ExamTimetable />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>

    </Router>
  );
}

export default App;
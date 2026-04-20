import { useNavigate } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">📚 Exam Scheduling System</h2>

        <ul>

          {/* ADMIN MENU */}
          {role === "admin" && (
            <>
              <li onClick={() => navigate("/dashboard")}>🏠 Admin Dashboard</li>
              <li onClick={() => navigate("/schedule")}>📝 Schedule Exam</li>
              <li onClick={() => navigate("/subjects")}>📘 Manage Subjects</li>
              <li onClick={() => navigate("/halls")}>🏢 Manage Halls</li>
              <li onClick={() => navigate("/timetable")}>📅 Exam Timetable</li>
            </>
          )}

          {/* STUDENT MENU */}
          {role === "student" && (
            <>
              <li onClick={() => navigate("/student-dashboard")}>🎓 Student Dashboard</li>
              <li onClick={() => navigate("/student-timetable")}>📅 Exam Timetable</li>
            </>
          )}

        </ul>
      </div>


      {/* Content Area */}
      <div className="content">

        {/* Topbar */}
        <div className="topbar">
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;
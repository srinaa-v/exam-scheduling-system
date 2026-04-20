import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // ADMIN LOGIN
    if (
      role === "admin" &&
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      alert("Admin Login Successful ✅");

      navigate("/dashboard");
      return;
    }

    // STUDENT LOGIN
    if (
      role === "student" &&
      email === "student@gmail.com" &&
      password === "student123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "student");

      alert("Student Login Successful ✅");

      navigate("/student-dashboard");
      return;
    }

    alert("Invalid Credentials ❌");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="logo">📖</div>

        <h2>EXAM SCHEDULING SYSTEM</h2>

        {/* Role Toggle */}
        <div className="role-toggle">

          <button
            type="button"
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>

          <button
            type="button"
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            LOGIN
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
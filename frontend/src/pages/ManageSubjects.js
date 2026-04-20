import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "./ManageSubjects.css";

function ManageSubjects() {
  const [subjects, setSubjects] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [students, setStudents] = useState("");

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/subjects`);
    setSubjects(res.data);
  };

  const addSubject = async () => {
    if (!name || !code || !students) {
      alert("Fill all fields");
      return;
    }

    await axios.post(`${API_BASE_URL}/api/subjects`, {
      subject_name: name,
      subject_code: code,
      total_students: students
    });

    setName("");
    setCode("");
    setStudents("");
    fetchSubjects();
  };

  const deleteSubject = async (id) => {
    await axios.delete(`${API_BASE_URL}/api/subjects/${id}`);
    fetchSubjects();
  };

  return (
    <div className="manage-container">
      <div className="manage-card">
        <h2>📘 Manage Subjects</h2>

          <div className="form-row">
            <input
              placeholder="Subject Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Subject Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <input
              type="number"
              placeholder="Total Students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
            />

            <button className="add-btn" onClick={addSubject}>
              Add Subject
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Subject Code</th>
                  <th>Total Students</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub) => (
                  <tr key={sub._id}>
                    <td>{sub.subject_name}</td>
                    <td>{sub.subject_code}</td>
                    <td>{sub.total_students}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteSubject(sub._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {subjects.length === 0 && (
                  <tr>
                    <td colSpan="4" className="no-data">
                      No Subjects Added Yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default ManageSubjects;

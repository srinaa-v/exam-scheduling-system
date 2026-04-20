import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import "./ManageHalls.css";

function ManageHalls() {
  const [halls, setHalls] = useState([]);
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [fromRoll, setFromRoll] = useState("");
  const [toRoll, setToRoll] = useState("");

  useEffect(() => {
    fetchHalls();
  }, []);

  const fetchHalls = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/halls`);
      setHalls(res.data);
    } catch (error) {
      console.error("Error fetching halls");
    }
  };

  const addHall = async () => {
    if (!name || !capacity || !fromRoll || !toRoll) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/halls`, {
        hall_name: name,
        capacity: Number(capacity),
        from_roll: fromRoll,
        to_roll: toRoll,
      });

      setName("");
      setCapacity("");
      setFromRoll("");
      setToRoll("");
      fetchHalls();
    } catch (error) {
      alert("Error adding hall");
    }
  };

  const deleteHall = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/halls/${id}`);
      fetchHalls();
    } catch (error) {
      alert("Error deleting hall");
    }
  };

  return (
    <div className="hall-container">
      <div className="hall-card">
        <h2>🏫 Manage Halls</h2>

          <div className="hall-form">
            <input
              placeholder="Hall Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />

            <input
              placeholder="From Roll Number"
              value={fromRoll}
              onChange={(e) => setFromRoll(e.target.value)}
            />

            <input
              placeholder="To Roll Number"
              value={toRoll}
              onChange={(e) => setToRoll(e.target.value)}
            />

            <button className="add-btn" onClick={addHall}>
              Add Hall
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Hall Name</th>
                  <th>Capacity</th>
                  <th>From Roll</th>
                  <th>To Roll</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {halls.map((hall) => (
                  <tr key={hall._id}>
                    <td>{hall.hall_name}</td>
                    <td>{hall.capacity}</td>
                    <td>{hall.from_roll}</td>
                    <td>{hall.to_roll}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteHall(hall._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {halls.length === 0 && (
                  <tr>
                    <td colSpan="5" className="no-data">
                      No Halls Added Yet
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

export default ManageHalls;
import React, { useEffect, useState } from "react";
import axios from "axios"; //send API request to backend(get, post..)

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/appointment/getall"
      );
      setAppointments(data.appointments);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };
//Run this code after the component finishes rendering on the screen
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Update appointment status (Approved / Declined)
  const handleStatusUpdate = async (id, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/appointment/update/${id}`,
        { status }
      );

      // transfroming the existing data
      setAppointments((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status } : app))
      );
      alert(data.message);
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Error updating status");
    }
  };

  // Delete an appointment
  const handleDelete = async (id) => {

    //popup dialog box in the user's browser
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;

    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/appointment/delete/${id}`
      );

      // Remove from data
      setAppointments((prev) => prev.filter((app) => app._id !== id));
      alert(data.message);
    } catch (error) {
      console.error("Failed to delete appointment:", error);
      alert("Error deleting appointment");
    }
  };

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div className="admin-container" style={{ padding: "20px" }}>
      <h2>Admin Dashboard - Appointment Management</h2>
      
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item) => (
              <tr key={item._id}>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.service}</td>
                <td>{item.date} at {item.time}</td>
                <td>
                  <strong>{item.status || "Pending"}</strong>
                </td>

                {/* update status */}
                <td>
                  <button 
                    onClick={() => handleStatusUpdate(item._id, "Approved")}
                    style={{ marginRight: "5px", backgroundColor: "#4CAF50", color: "white" }}
                  >
                    Approve
                  </button>
                  
                  <button 
                    onClick={() => handleStatusUpdate(item._id, "Declined")}
                    style={{ marginRight: "5px", backgroundColor: "#f44336", color: "white" }}
                  >
                    Decline
                  </button>

                  <button 
                    onClick={() => handleDelete(item._id)}
                    style={{ backgroundColor: "#555", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
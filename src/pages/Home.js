import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeServiceInstance from "../services/EmployeeService";
import { exportEmployeesToExcel } from "./exportToExcel";


function Home() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await employeeServiceInstance.getAllEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await employeeServiceInstance.deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp.id !== id));
      alert("Employee deleted successfully!");
    } catch (error) {
      console.error("Failed to delete employee:", error);
      alert("Delete failed!");
    }
  };

  if (loading) return <p>Loading employees...</p>;

  return (
    <>
      <h1 className="title">Employee Management System</h1>
      <p className="subtitle">Welcome! Manage your employees efficiently.</p>

      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.email}</td>
                  <td>
                    <button
                      className="icon-btn edit"
                      onClick={() => handleEdit(emp.id)}
                      title="Edit"
                    >
                      Edit ✏️
                    </button>
                    <button
                      className="icon-btn delete"
                      onClick={() => handleDelete(emp.id)}
                      title="Delete"
                    >
                      Delete 🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button className="add-btn" onClick={() => navigate("/add")}>
          Add Employee
        </button>
        <button className="export-btn" onClick={() => exportEmployeesToExcel(employees)}>
        📤 Export to Excel
        \ </button>
      </div>
    </>
  );
}

export default Home;

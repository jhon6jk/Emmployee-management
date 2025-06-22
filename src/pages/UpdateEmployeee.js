import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeServiceInstance from "../services/EmployeeService";

function UpdateEmployee() {
  const { id } = useParams(); // ✅ FIXED useParams()
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await employeeServiceInstance.getEmployeeById(id); // ✅ using `id` directly
        setEmployee(response.data);
      } catch (error) {
        console.error("Failed to fetch employee:", error);
      }
    };
    fetchData();
  }, [id]); // ✅ safer dependency

  const updateEmp = async (e) => {
    e.preventDefault();
    try {
      const response = await employeeServiceInstance.updateEmployee(employee, id); // ✅ send full employee object
      console.log("Updated:", response);
      navigate("/");
    } catch (error) {
      console.error("Failed to update employee:", error);
    }
  };

  const handleCancel = () => {
    navigate("/"); // ✅ consistent route
  };

  return (
    <div className="form-container">
      <h2 className="title">Update Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Phone"
        value={employee.phone}
        onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Email"
        value={employee.email}
        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        className="input-field"
      />

      <div className="button-group">
        <button className="save-btn" onClick={updateEmp}>Save</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateEmployee;

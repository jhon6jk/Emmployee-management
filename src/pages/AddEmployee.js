import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", phone: "", email: "" });

  const handleSave = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
    .then((response)=>{
           console.log(response);
           navigate("/")
    })
    .catch((error)=>{
      console.log(error);
    })

  };

  const handleClear = () => {
    setEmployee({ name: "", phone: "", email: "" });
    alert("Form cleared!");
  };

  const handleCancel = () => {
    navigate("/home");  // Return to home without saving
  };

  return (
    <div className="form-container">
      <h2 className="title">Add New Employee</h2>
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
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddEmployee;

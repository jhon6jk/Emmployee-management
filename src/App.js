import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import Navbar from "./pages/Navbar";
import UpdateEmployee from "./pages/UpdateEmployeee"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="overlay">
          <Routes>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<UpdateEmployee/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

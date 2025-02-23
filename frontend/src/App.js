// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import ExportData from "./components/ExportData";
import ImportData from "./components/ImportData";
import Settings from "./components/Settings";
import logo from "./assets/logo.png";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <a href="/">
          <img
            src={logo}
            alt="Die Cast Collection Tracker"
            style={{ width: "200px", marginBottom: "20px" }}
          />
        </a>
        <h1>Die Cast Collection Tracker</h1>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/export" className="nav-link">
            Export
          </Link>
          <Link to="/import" className="nav-link">
            Import
          </Link>
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/export" element={<ExportData />} />
          <Route path="/import" element={<ImportData />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

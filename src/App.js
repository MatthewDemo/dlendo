import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectDetails from './pages/Project-details/ProjectDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-details" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;

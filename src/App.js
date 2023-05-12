import React, {useState} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/Project-details/ProjectDetails";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isMobile={isMobile}
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
          />
        }
      />
      <Route
        path="/project-details/:id"
        element={
          <ProjectDetails
            isMobile={isMobile}
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
          />
        }
      />
    </Routes>
  );
}

export default App;

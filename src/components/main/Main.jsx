import React from "react";
import "./Main.scss";
import Projects from "./projects/Projects";
import Map from "./map/Map";
import AllProjects from "./allProjects/AllProjects";


const Main = () => {
  return (
    <div className="main">
      <Projects />
      <Map />
      <AllProjects />
    </div>
  );
};


export default Main;

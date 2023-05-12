import React from "react";
import "./Main.scss";
import Projects from "./projects/Projects";
import Map from "./map/Map";
import AllProjects from "./allProjects/AllProjects";
import MobileHeader from "./mobile-header/MobileHeader";

const Main = ({ isMobile, setIsNavbarOpen, isNavbarOpen }) => {
  return (
    <div className="main">
      {isMobile && <MobileHeader
        isMobile={isMobile}
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />}
      <Projects isMobile={isMobile} />
      <Map isMobile={isMobile} />
      <AllProjects />
    </div>
  );
};

export default Main;

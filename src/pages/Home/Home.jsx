import React, { useState } from "react";
import "./Home.scss";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="home">
      {(!isMobile || isNavbarOpen) && (
        <Navbar
          isMobile={isMobile}
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
          height="2360px"
        />
      )}
      <Main
        isMobile={isMobile}
        setIsNavbarOpen={setIsNavbarOpen}
        isNavbarOpen={isNavbarOpen}
      />
    </div>
  );
};

export default Home;

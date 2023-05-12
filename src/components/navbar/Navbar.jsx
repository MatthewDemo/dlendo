import React from "react";
import NavbarUserInfo from "./navbarUserInfo/NavbarUserInfo";
import NavbarLogo from "./navbarLogo/NavbarLogo";
import NavbarUserPanel from "./navbarUserPanel/NavbarUserPanel";
import NavbarHomepage from "./navbarHomepage/NavbarHomepage";
import NavbarSupport from "./navbarSupport/NavbarSupport";
import "./Navbar.scss";

const Navbar = ({height, isMobile, isNavbarOpen, setIsNavbarOpen}) => {
  return (
    <div className='navbar' style={{height: height}}>
      <NavbarLogo isMobile={isMobile} isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <NavbarUserInfo />
      <NavbarUserPanel />
      <NavbarHomepage />
      <NavbarSupport />
    </div>
  );
};

export default Navbar;

import React from "react";
import NavbarUserInfo from "./navbarUserInfo/NavbarUserInfo";
import NavbarLogo from "./navbarLogo/NavbarLogo";
import NavbarUserPanel from "./navbarUserPanel/NavbarUserPanel";
import NavbarHomepage from "./navbarHomepage/NavbarHomepage";
import NavbarSupport from "./navbarSupport/NavbarSupport";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarLogo />
      <NavbarUserInfo />
      <NavbarUserPanel />
      <NavbarHomepage />
      <NavbarSupport />
    </div>
  );
};

export default Navbar;

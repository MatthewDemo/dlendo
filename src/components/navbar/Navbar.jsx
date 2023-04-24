import React from "react";
import NavbarLogo from "../../assets/navbar-logo.png";
import NavbarUserInfo from "../navbarUserInfo/NavbarUserInfo";
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={NavbarLogo} alt="" />
        <span >Dlendo</span>
      </div>
      <NavbarUserInfo />

    </div>
  );
};

export default Navbar;

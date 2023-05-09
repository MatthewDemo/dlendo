import React from "react";
import NavbarLogoIcon from "../../../assets/navbar-logo.png";
import "./NavbarLogo.scss";

const NavbarLogo = () => {
  return (
    <div className="logo">
      <img src={NavbarLogoIcon} alt="" />
      <span>Dlendo</span>
    </div>
  );
};

export default NavbarLogo;

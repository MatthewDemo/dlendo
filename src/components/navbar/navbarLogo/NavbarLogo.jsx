import React from "react";
import NavbarLogoIcon from '../../../assets/navbar-logo.png'
import { Link } from "react-router-dom";

import "./NavbarLogo.scss";

const NavbarLogo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
    <div className="logo">
      <img src={NavbarLogoIcon} alt="" />
      <span>Dlendo</span>
    </div>
    </Link>
    
  );
};

export default NavbarLogo;

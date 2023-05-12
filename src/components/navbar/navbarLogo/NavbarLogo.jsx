import React from "react";
import NavbarLogoIcon from "../../../assets/navbar-logo.png";
import "./NavbarLogo.scss";
import NavbarMobileCloseIcon from "../../../assets/img/navbar-user-info-icons/navbar-mobile-close-icon.svg";

const NavbarLogo = ({ isMobile, isNavbarOpen, setIsNavbarOpen }) => {
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="logo">
      <img src={NavbarLogoIcon} alt="" />
      <span>Dlendo</span>
      {isMobile && (
        <img
          className="navbar-mobile-close-icon"
          src={NavbarMobileCloseIcon}
          alt=""
          onClick={handleNavbarToggle}
        />
      )}
    </div>
  );
};

export default NavbarLogo;

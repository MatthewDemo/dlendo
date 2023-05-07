import React from "react";
import "./NavbarSupport.scss";
import FacebookIcon from "../../../assets/img/support-icons/facebook-icon.svg";

const NavbarSupport = () => {
  return (
    <div className="navbar-support">
      <p>SUPPORT</p>
      <ul>
        <li className="navbar-support-mail">
          <img src="" alt="" /> <span>Support@dlendo.com</span>
        </li>
        <li>
          <img src={FacebookIcon} alt="" className="fb-icon" />
          <span className="fb-text">Facebook</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSupport;

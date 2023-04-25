import React from "react";
import "./NavbarSupport.scss";
import MailIcon from "../../../assets/img/support-icons/mail-icon.svg";
import FacebookIcon from "../../../assets/img/support-icons/facebook-icon.svg";

const NavbarSupport = () => {
  return (
    <div className="navbar-support">
      <p>SUPPORT</p>
      <ul>
        <li>
          <img src={MailIcon} alt="" /> <span>Support@dlendo.com</span>
        </li>
        <li>
          <img src={FacebookIcon} alt="" className="fb-icon"/>
          <span className="fb-text">Facebook</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSupport;

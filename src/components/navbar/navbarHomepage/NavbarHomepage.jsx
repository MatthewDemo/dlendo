import React from "react";
import "./NavbarHomepage.scss";
import DlendoIcon from "../../../assets/img/homepage-icons/dlendo-homepage-icon.svg";
import QuestionIcon from "../../../assets/img/homepage-icons/question-icon.svg";

const NavbarHomepage = () => {
  return (
    <div className="navbar-homepage">
      <p>HOMEPAGE</p>
      <ul>
        <li>
          <img src={DlendoIcon} alt="" /> <span>Dlendo</span>
        </li>
        <li>
          <img src={QuestionIcon} className="faq-icon" alt="" /> <span className="faq">FAQ</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHomepage;

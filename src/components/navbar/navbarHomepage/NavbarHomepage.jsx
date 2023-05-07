import React from "react";
import "./NavbarHomepage.scss";

const NavbarHomepage = () => {
  return (
    <div className="navbar-homepage">
      <p>HOMEPAGE</p>
      <ul>
        <li className="navbar-homepage-dlendo">
          <img src="" alt="" /> <span>Dlendo</span>
        </li>
        <li className="navbar-homepage-faq">
          <img src="" className="faq-icon" alt="" />{" "}
          <span className="faq">FAQ</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHomepage;

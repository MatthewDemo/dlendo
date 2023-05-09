import React from "react";
import { Link } from "react-router-dom";
import "./NavbarUserPanel.scss";

const NavbarUserPanel = () => {
  return (
    <div className="navbar-user-panel">
      <p>USER PANEL</p>
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="user-panel-dashboard">
            <img src="" alt="" />{" "}
            <span className="userpanel-text">Dashboard</span>
          </li>
        </Link>{" "}
        <li className="user-panel-dlendo-portfolio">
          <img src="" alt="" />{" "}
          <span className="userpanel-text">Dlendo portfolio</span>
        </li>
        <li className="user-panel-my-portfolio">
          <img src="" alt="" />{" "}
          <span className="userpanel-text">My portfolio</span>
        </li>
        <li className="user-panel-my-wallet">
          <img src="" alt="" />{" "}
          <span className="userpanel-text">My wallet</span>
        </li>
        <li className="user-panel-partnership">
          <img src="" alt="" />{" "}
          <span className="userpanel-text">Partnership</span>
        </li>
        <li className="user-panel-company-news">
          <img src="" alt="" />{" "}
          <span className="userpanel-text">Company news</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarUserPanel;

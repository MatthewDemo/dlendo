import React from "react";
import NavbarUserLogo from "../../../assets/navbar-user-logo.svg";
import NavbarEllipseLogo from "../../../assets/navbar-ellipse-logo.svg";
import BalanceIcon from "../../../assets/balance-icon.svg";
import BalanceAddIcon from "../../../assets/balance-add-icon.svg";
import FundedIcon from "../../../assets/funded-icon.svg";
import PendingIcon from "../../../assets/pending-icon.svg";
import VesiIcon from '../../../assets/vesi-icon.svg'
import GearIcon from '../../../assets/gear-icon.svg'
import BellIcon from '../../../assets/bell-icon.svg'
import "./NavbarUserInfo.scss";

const NavbarUserInfo = () => {
  return (
    <div className="navbar-user-info">
      <div className="button-container">
        <button><img src={VesiIcon} alt="" /></button>
        <button><img src={GearIcon} alt="" /></button>
        <button><img src={BellIcon} alt="" /></button>
      </div>
      <div className="navbar-user-logo">
        <img src={NavbarUserLogo} alt="" />
        <img src={NavbarEllipseLogo} alt="" />
        <span>Laurens Bernstein</span>
      </div>
      <ul className="navbar-user-balance-container">
        <li>
          <img src={BalanceIcon} alt="" />
          <img src={BalanceAddIcon} className="add-icon" alt="" />
          <span className="navbar-user-balance-text">Balance</span>
          <span className="navbar-user-balance">€ 120267.09</span>
        </li>
        <li>
          <img src={FundedIcon} alt="" />
          <span className="navbar-user-balance-text">Funded</span>
          <span className="navbar-user-balance">€ 820267.09</span>
        </li>
        <li>
          <img src={PendingIcon} alt="" />
          <span className="navbar-user-balance-text">Pending</span>
          <span className="navbar-user-balance">€ 120345.09</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarUserInfo;

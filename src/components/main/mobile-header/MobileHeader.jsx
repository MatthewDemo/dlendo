import React from 'react'
import './MobileHeader.scss'
import MobileHeaderLogo from '../../../assets/img/main-header-icons/mobile-header-logo.svg'
import menuIcon from "../../../assets/img/homepage-icons/menu-icon.svg";

const MobileHeader = ({setIsNavbarOpen, isNavbarOpen, isMobile}) => {
    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
      };
  return (
    <div className='mobile-header'>
      <img className='moblie-header-logo' src={MobileHeaderLogo} alt="" />
      {isMobile && (
        <img
          src={menuIcon}
          alt=""
          className="hamburger-button"
          onClick={handleNavbarToggle}
        />
      )}
    </div>
  )
}

export default MobileHeader

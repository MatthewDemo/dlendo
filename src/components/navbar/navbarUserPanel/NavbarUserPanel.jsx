import React from 'react'
import DashboardIcon from '../../../assets/img/user-panel-icons/dashboard-icon.svg'
import DlendoPortfolioIcon from '../../../assets/img/user-panel-icons/dlendo-portfolio-icon.svg'
import MyPortfolioIcon from '../../../assets/img/user-panel-icons/my-portfolio-icon.svg'
import MyWalletIcon from '../../../assets/img/user-panel-icons/my-wallet-icon.svg'
import PatrnershipIcon from '../../../assets/img/user-panel-icons/partnership-icon.svg'
import CompanyNewsIcon from '../../../assets/img/user-panel-icons/company-news-icon.svg'

import './NavbarUserPanel.scss'

const NavbarUserPanel = () => {
  return (
    <div className='navbar-user-panel'>
      <p>USER PANEL</p>
      <ul>
        <li><img src={DashboardIcon} alt="" /> <span className='userpanel-text'>Dashboard</span></li>
        <li><img src={DlendoPortfolioIcon} alt="" /> <span className='userpanel-text'>Dlendo portfolio</span></li>
        <li><img src={MyPortfolioIcon} alt="" /> <span className='userpanel-text'></span></li>
        <li><img src={MyWalletIcon} alt="" /> <span className='userpanel-text'>My wallet</span></li>
        <li><img src={PatrnershipIcon} alt="" /> <span className='userpanel-text'>Partnership</span></li>
        <li><img src={CompanyNewsIcon} alt="" /> <span className='userpanel-text'>Company news</span></li>
      </ul>
    </div>
  )
}

export default NavbarUserPanel

import React from 'react'
import './DashboardSubbarPath.scss'
import PathIcon from '../../../assets/img/project-details-subbar/subbar-path-icon.svg'

const DashboardSubbarPath = () => {
  return (
    <div className='dashboard-subbar-path'>
      <span>Dashboard</span>
      <img src={PathIcon} alt="" />
      <span>Project details</span>
    </div>
  )
}

export default DashboardSubbarPath

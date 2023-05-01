import React from 'react'
import './DashboardSubbarHeader.scss'
import ProjectDetailsSubbarHeaderImage from '../../../assets/img/project-details-subbar/project-details-subbar-header-icon.svg'

const DashboardSubbarHeader = () => {
  return (
    <div className='dashboard-subbar-header'>
      <img src={ProjectDetailsSubbarHeaderImage} alt="" />
      <span className='dashboard-subbar-header-text'>Project details</span>
    </div>
  )
}

export default DashboardSubbarHeader

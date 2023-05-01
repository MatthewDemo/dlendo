import React from 'react'
import './ProjectDetailsSubbarPath.scss'
import PathIcon from '../../../assets/img/project-details-subbar/subbar-path-icon.svg'

const ProjectDetailsSubbarPath = () => {
  return (
    <div className='project-details-subbar-path'>
      <span>Dashboard</span>
      <img src={PathIcon} alt="" />
      <span>Project details</span>
    </div>
  )
}

export default ProjectDetailsSubbarPath

import React from 'react'
import './ProjectDetailsSubbarHeader.scss'
import ProjectDetailsSubbarHeaderImage from '../../../assets/img/project-details-subbar/project-details-subbar-header-icon.svg'

const ProjectDetailsSubbarHeader = () => {
  return (
    <div className='project-details-subbar-header'>
      <img src={ProjectDetailsSubbarHeaderImage} alt="" />
      <span className='project-details-subbar-header-text'>Project details</span>
    </div>
  )
}

export default ProjectDetailsSubbarHeader

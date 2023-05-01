import React from 'react'
import './ProjecDetailsSubbar.scss'
import ProjectDetailsSubbarHeader from './project-details-subbar-header/ProjectDetailsSubbarHeader'
import ProjectDetailsSubbarPath from './project-details-subbar-path/ProjectDetailsSubbarPath'
import ProjectDetailsSubbarItems from './project-details-subbar-items/ProjectDetailsSubbarItems'

const ProjecDetailsSubbar = () => {
  return (
    <div className='subbar'>
      <ProjectDetailsSubbarHeader />
      <ProjectDetailsSubbarPath />
      <ProjectDetailsSubbarItems />
    </div>
  )
}

export default ProjecDetailsSubbar

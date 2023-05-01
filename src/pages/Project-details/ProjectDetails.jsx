import React from 'react'
import './ProjectDetails.scss'
import Navbar from '../../components/navbar/Navbar'
import ProjecDetailsSubbar from '../../components/project-details-subbar/ProjecDetailsSubbar'

const ProjectDetails = () => {
  return (
    <div className='project-details'>
      <Navbar />
      <ProjecDetailsSubbar />
    </div>
  )
}

export default ProjectDetails

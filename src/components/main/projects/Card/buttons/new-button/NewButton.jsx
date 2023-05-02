import React from 'react'
import './NewButton.scss'
import NewIcon from "../../../../../../assets/img/projects/new-icon.svg";

const NewButton = () => {
  return (
    <button className='new-button'>
      <img src={NewIcon} alt="" />
    </button>
  )
}

export default NewButton

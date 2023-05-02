import React from 'react'
import './HotButton.scss'
import HotIcon from "../../../../../../assets/img/projects/hot-fire-icon.svg";

const HotButton = () => {
  return (
    <button className='hot-button'>
      <img src={HotIcon} alt="" />
    </button>
  )
}

export default HotButton

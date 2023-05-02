import React from 'react'
import './CompareButton.scss'
import RightCircleButton from "../../../../../../assets/img/projects/right-circle-button.svg";

const CompareButton = () => {
  return (
    <button className='compare-button'>
      <img src={RightCircleButton} alt="" />
    </button>
  )
}

export default CompareButton

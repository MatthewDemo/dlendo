import React from 'react'
import './SecondInvestPopup.scss'

const SecondInvestPopup = ({toggleSecondInvestPopup}) => {
  return (
    <div className="second-invest-popup-background">
          <div className="second-invest-popup-container">
            <h2>Second invest Popup Title</h2>
            <p>Popup content goes here</p>
            <button onClick={toggleSecondInvestPopup}>Close</button>
          </div>
        </div>
  )
}

export default SecondInvestPopup

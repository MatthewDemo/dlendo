import React from 'react'
import './CalculatorHeader.scss'

const CalculatorHeader = ({currentAmount, maxAmount}) => {
  return (
    <div className="calculator-percentage">
        <div className="zero-percent">
          <span>0%</span>
        </div>
        <div className="calculator-current-amount">€{currentAmount}</div>
        <div className="hundred-percent">
          <span>€{maxAmount}</span>
        </div>
      </div>
  )
}

export default CalculatorHeader

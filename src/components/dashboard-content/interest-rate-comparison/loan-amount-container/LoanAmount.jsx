import React from 'react'
import './LoanAmount.scss'
const LoanAmount = () => {
  return (
    <div className="loan-amount-container">
        <span>Loan amount</span>
        <div className="loan-amount-input-container">
            <span>€</span>
            <input type="text" placeholder="0.00"/>
        </div>
      </div>
  )
}

export default LoanAmount

import React from 'react'
import './ComparisonTable.scss'

const ComparisonTable = () => {
  return (
    <div class="table-container">
    <div class="table-header">
      <div>Bank name</div>
      <div>Interest rate</div>
      <div>Loan rate</div>
      <div>Profit margin (%)</div>
      <div>Profit margin (€)</div>
    </div>
    <div class="table-row">
      <div className="table-bank-name">Deutsche Bank</div>
      <div className="table-rate">% 3.75</div>
      <div className="table-rate">% 4.75</div>
      <div className="table-profit"> <div className="profit-color-box">% 0.65</div> </div>
      <div className="table-profit"><div className="profit-color-box">€ 525.25</div></div>
    </div>
    <div class="table-row">
      <div className="table-bank-name">Commerzbank</div>
      <div className="table-rate">% 4.15</div>
      <div className="table-rate">% 3.60</div>
      <div className="table-profit"><div className="profit-color-box">% 0.80</div></div>
      <div className="table-profit"><div className="profit-color-box">€ 23.25</div></div>
    </div>
    <div class="table-row">
      <div className="table-bank-name">KFW Bankgruppe</div>
      <div className="table-rate">% 2.50</div>
      <div className="table-rate">% 3.55</div>
      <div className="table-profit"><div className="profit-color-box">% 1.15</div></div>
      <div className="table-profit"><div className="profit-color-box">€ 9.95</div></div>
    </div>
  </div>
  )
}

export default ComparisonTable

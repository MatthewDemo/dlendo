import React from 'react'
import './InputRange.scss'

const InputRange = ({currentAmount, maxAmount, setCurrentAmount}) => {
    const handleSliderChange = (e) => {
        setCurrentAmount(e.target.value);
      };
  return (
    <div className="calculator-input-range">
        <input
          type="range"
          min="0"
          max={maxAmount}
          value={currentAmount}
          onChange={handleSliderChange}
          style={{ "--slider-value": currentAmount, "--slider-max": maxAmount }}
        />
      </div>
  )
}

export default InputRange

import React from 'react'
import FilledStar from "../../../../../assets/img/dashboard-icons/project-details-icons/filled-star-icon.svg";
import UnfilledStar from "../../../../../assets/img/dashboard-icons/project-details-icons/unfilled-star-icon.svg";
const RatingComponent = () => {
  return (
    <div className="rating-container">
        <div className="project-mark">15</div>
        <div className="project-star-container">
          <div className="five-stars-container">
            <img src={FilledStar} alt="" />
            <img src={FilledStar} alt="" />
            <img src={FilledStar} alt="" />
            <img src={FilledStar} alt="" />
            <img src={UnfilledStar} alt="" />
          </div>
          <div className="letter-mark">A</div>
        </div>
      </div>
  )
}

export default RatingComponent

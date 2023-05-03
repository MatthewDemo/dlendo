import React from "react";
import "./ProjectMilestones.scss";
import CheckMarkLightIcon from "../../../assets/img/dashboard-icons/milestones-icons/check-mark-light-icon.svg";
import CheckMarkGreyIcon from "../../../assets/img/dashboard-icons/milestones-icons/check-mark-grey-icon.svg";

const ProjectMilestones = () => {
  return (
    <div className="dashboard-project-milestones">
      <span className="dashboard-item-title">Project milestones</span>
      <ul>
        <li className="milestone-active">
          <div className="milestones-number">1</div>
          <div className="milestones-named-container">
            <div className="milestones-check-mark">
              <img src={CheckMarkLightIcon} alt="" />
            </div>
            <p>Property purchased</p>
          </div>
        </li>
        <li className="milestone-active">
          <div className="milestones-number">2</div>
          <div className="milestones-named-container">
            <div className="milestones-check-mark">
              <img src={CheckMarkLightIcon} alt="" />
            </div>
            <p>Start of construction</p>
          </div>
        </li>
        <li className="milestone-active">
          <div className="milestones-number">3</div>
          <div className="milestones-named-container">
            <div className="milestones-check-mark">
              <img src={CheckMarkLightIcon} alt="" />
            </div>
            <p>Building permit</p>
          </div>
        </li>
        <li className="milestone-inactive">
          <div className="milestones-number ">4</div>
          <div className="milestones-named-container ">
            <div className="milestones-check-mark">
              <img src={CheckMarkGreyIcon} alt="" />
            </div>
            <p>Start sales</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectMilestones;

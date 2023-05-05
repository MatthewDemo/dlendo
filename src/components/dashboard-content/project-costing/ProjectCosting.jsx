import React from "react";
import "./ProjectCosting.scss";

const ProjectCosting = () => {
  return (
    <div className="project-costing-block">
      <span className="project-costing-block-title" id="project-costing-block">Project costing</span>
      <ul>
        <li>
          <span className="project-costing-name">Cost of acquisition</span>
          <span className="project-costing-price">€2.078.600</span>
        </li>
        <li>
          <span className="project-costing-name">Construction costs</span>
          <span className="project-costing-price">€5.342.000</span>
        </li>
        <li>
          <span className="project-costing-name">Fees</span>
          <span className="project-costing-price">€250.000</span>
        </li>
        <li>
          <span className="project-costing-name">Financing costs</span>
          <span className="project-costing-price">€593.480</span>
        </li>
        <li>
          <span className="project-costing-name">Reserve</span>
          <span className="project-costing-price">€55.920</span>
        </li>
      </ul>
      <div className="project-costing-total-investment">
        <span className="project-costing-total-investment-name">
          Total investment
        </span>
        <span className="project-costing-total-investment-price">
          €2.078.600
        </span>
      </div>
      <ul className="project-costing-secong-ul">
        <li>
          <span className="project-costing-name">Expected sales proceeds</span>
          <span className="project-costing-price">€10.184.000</span>
        </li>
        <li>
          <span className="project-costing-name">Gross profit</span>
          <span className="project-costing-price">€1.864.000</span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCosting;

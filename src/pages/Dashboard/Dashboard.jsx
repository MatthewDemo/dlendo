import React from "react";
import "./Dashboard.scss";
import Navbar from "../../components/navbar/Navbar";
import DashboardSubbar from "../../components/dashboard-subbar/DashboardSubbar";
import ProjectDetailsBlock from "../../components/dashboard-content/project-details-block/ProjectDetailsBlock";
import Calculator from "../../components/dashboard-content/calculator/Calculator";
import ProjectMilestones from "../../components/dashboard-content/project-milestones/ProjectMilestones";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <DashboardSubbar />
      <div className="dashboard-content-block">
        <ProjectDetailsBlock />
        <div className="calculator-milestones-container">
            <Calculator />
            <ProjectMilestones />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

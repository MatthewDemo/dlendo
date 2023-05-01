import React from "react";
import "./Dashboard.scss";
import Navbar from "../../components/navbar/Navbar";
import DashboardSubbar from "../../components/dashboard-subbar/DashboardSubbar";
import ProjectDetailsBlock from "../../components/dashboard-content/project-details-block/ProjectDetailsBlock";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <DashboardSubbar />
      <div className="dashboard-content-block">
        <ProjectDetailsBlock />
      </div>
    </div>
  );
};

export default Dashboard;

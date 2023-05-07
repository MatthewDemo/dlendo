import React from "react";
import "./DashboardSubbar.scss";
import DashboardSubbarHeader from "./dashboard-subbar-header/DashboardSubbarHeader";
import DashboardSubbarPath from "./dashboard-subbar-path/DashboardSubbarPath";
import DashboardSubbarItems from "./dashboard-subbar-items/DashboardSubbarItems";

const DashboardSubbar = () => {
  return (
    <div className="subbar">
      <DashboardSubbarHeader />
      <DashboardSubbarPath />
      <DashboardSubbarItems />
    </div>
  );
};

export default DashboardSubbar;

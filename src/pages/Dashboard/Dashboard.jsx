import React, { useState } from "react";
import "./Dashboard.scss";
import Navbar from "../../components/navbar/Navbar";
import DashboardSubbar from "../../components/dashboard-subbar/DashboardSubbar";
import ProjectDetailsBlock from "../../components/dashboard-content/project-details-block/ProjectDetailsBlock";
import Calculator from "../../components/dashboard-content/calculator/Calculator";
import ProjectMilestones from "../../components/dashboard-content/project-milestones/ProjectMilestones";
import ProjectNews from "../../components/dashboard-content/project-news/ProjectNews";
import ProjectPresentation from "../../components/dashboard-content/project-presentation/ProjectPresentation";
import InterestRate from "../../components/dashboard-content/interest-rate-comparison/InterestRate";
import DealHighlights from "../../components/dashboard-content/deal-highlights/DealHighlights";
import Documents from "../../components/dashboard-content/documents/Documents";
import InvestmentCase from "../../components/dashboard-content/investment-case/InvestmentCase";
import ProjectCosting from "../../components/dashboard-content/project-costing/ProjectCosting";
import FinanceStructure from "../../components/dashboard-content/finance-structure/FinanceStructure";
import DlendoRating from "../../components/dashboard-content/dlendo-rating/DlendoRating";
import Location from "../../components/dashboard-content/location/Location";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="dashboard-page">
      <Navbar />
      <DashboardSubbar />
      <div className="dashboard-content-block">
        <ProjectDetailsBlock activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
        <div className="calculator-milestones-container">
            <Calculator activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            <ProjectMilestones />
        </div>
        <ProjectNews activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
        <ProjectPresentation />
        <InterestRate />
        <DealHighlights />
        <Documents />
        <InvestmentCase />
        <ProjectCosting />
        <FinanceStructure />
        <DlendoRating />
        <Location activeIndex={activeIndex}/>
      </div>
    </div>
  );
};

export default Dashboard;

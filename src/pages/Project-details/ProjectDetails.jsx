import React, { useState } from "react";
import "./ProjectDetails.scss";
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
import ReturnToDashboardButton from "../../components/dashboard-content/return-to-dashboard-button/ReturnToDashboardButton";
import UpButton from "../../components/dashboard-content/up-button/UpButton";
import RelatedProjects from "../../components/dashboard-content/related-projects/RelatedProjects";

const ProjectDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="dashboard-page">
      <Navbar height="7550px" />
      <DashboardSubbar />
      <div className="dashboard-content-block" id="dashboard-content-block">
        <ProjectDetailsBlock setActiveIndex={setActiveIndex} />
        <div className="calculator-milestones-container">
          <Calculator setActiveIndex={setActiveIndex} />
          <ProjectMilestones />
        </div>
        <ProjectNews
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <ProjectPresentation />
        <InterestRate />
        <DealHighlights />
        <Documents />
        <InvestmentCase />
        <ProjectCosting />
        <FinanceStructure />
        <DlendoRating />
        <Location activeIndex={activeIndex} />
        <ReturnToDashboardButton />
        <UpButton />
        <RelatedProjects />
      </div>
    </div>
  );
};

export default ProjectDetails;

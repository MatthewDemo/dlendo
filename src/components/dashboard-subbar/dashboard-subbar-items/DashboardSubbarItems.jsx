import React from "react";
import "./DashboardSubbarItems.scss";
import ProjectDetailsIcon from "../../../assets/img/project-details-subbar/project-details-subbar-header-icon.svg";
import CalculatorIcon from "../../../assets/img/project-details-subbar/project-details-subbar-calculator-icon.svg";
import ProjectMilestonesIcon from "../../../assets/img/project-details-subbar/project-details-subbar-milestones-icon.svg";
import ProjectNewsIcon from "../../../assets/img/project-details-subbar/project-details-subbar-project-news-icon.svg";
import ProjectPresentationIcon from "../../../assets/img/project-details-subbar/project-details-subbar-project-presentation-icon.svg";
import InterestRatesIcon from "../../../assets/img/project-details-subbar/project-details-subbar-interest-rates-icon.svg";
import DealHighlightsIcon from "../../../assets/img/project-details-subbar/project-details-subbar-deal-highlights-icon.svg";
import DocumentsIcon from "../../../assets/img/project-details-subbar/project-details-subbar-documents-icon.svg";
import InvestmentCaseIcon from "../../../assets/img/project-details-subbar/project-details-subbar-investment-case-icon.svg";
import ProjectCoastingIcon from "../../../assets/img/project-details-subbar/project-details-subbar-project-coasting-icon.svg";
import FinanceStructureIcon from "../../../assets/img/project-details-subbar/project-details-subbar-finance-structure-icon.svg";
import MarketOverviewIcon from "../../../assets/img/project-details-subbar/project-details-subbar-market-overview-icon.svg";
import DlendoRatingIcon from "../../../assets/img/project-details-subbar/project-details-subbar-dlendo-rating-icon.svg";
import LocationIcon from "../../../assets/img/project-details-subbar/project-details-subbar-location-icon.svg";

const DashboardSubbarItems = () => {
  return (
    <ul className="dashboard-subbar-items">
      <li>
        <img src={ProjectDetailsIcon} alt="" />{" "}
        <span className="subbar-text">Project details</span>
      </li>
      <li>
        <img src={CalculatorIcon} alt="" />{" "}
        <span className="subbar-text">Calculator</span>
      </li>
      <li>
        <img src={ProjectMilestonesIcon} alt="" />{" "}
        <span className="subbar-text">Project milestones</span>
      </li>
      <li>
        <img src={ProjectNewsIcon} alt="" />{" "}
        <span className="subbar-text">Project news</span>
      </li>
      <li>
        <img src={ProjectPresentationIcon} alt="" />{" "}
        <span className="subbar-text">Project presentation</span>
      </li>
      <li>
        <img src={InterestRatesIcon} alt="" />{" "}
        <span className="subbar-text">Interest rates</span>
      </li>
      <li>
        <img src={DealHighlightsIcon} alt="" />{" "}
        <span className="subbar-text">Deal highlights</span>
      </li>
      <li>
        <img src={DocumentsIcon} alt="" />{" "}
        <span className="subbar-text">Documents</span>
      </li>
      <li>
        <img src={InvestmentCaseIcon} alt="" />{" "}
        <span className="subbar-text">Investment case</span>
      </li>
      <li>
        <img src={ProjectCoastingIcon} alt="" />{" "}
        <span className="subbar-text">Project coasting</span>
      </li>
      <li>
        <img src={FinanceStructureIcon} alt="" />{" "}
        <span className="subbar-text">Finance structure</span>
      </li>
      <li>
        <img src={MarketOverviewIcon} alt="" />{" "}
        <span className="subbar-text">Market overview</span>
      </li>
      <li>
        <img src={DlendoRatingIcon} alt="" />{" "}
        <span className="subbar-text">Dlendo rating</span>
      </li>
      <li>
        <img src={LocationIcon} alt="" />{" "}
        <span className="subbar-text">Location</span>
      </li>
    </ul>
  );
};

export default DashboardSubbarItems;

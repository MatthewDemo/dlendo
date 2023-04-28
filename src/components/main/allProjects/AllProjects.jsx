import React from "react";
import "./AllProjects.scss";
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
import AllProjectsCards from "./allProjectsCards/AllProjectsCards";

const AllProjects = () => {
  return (
    <div className="all-projects-block">
      <p className="all-projects-header-text">All projects</p>
      <div className="filter-sort-block">
        <Filter />
        <div className="sort-block">
          <p>Sort by:</p>
          <Sort />
        </div>
      </div>
      <AllProjectsCards />
    </div>
  );
};

export default AllProjects;

import React from "react";
import "./AllProjects.scss";
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
import { useSelector } from "react-redux";

const AllProjects = () => {
  const allHouses = useSelector((state) => state.house.allHouses);
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
    </div>
  );
};

export default AllProjects;

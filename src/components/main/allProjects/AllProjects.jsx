import React from "react";
import './AllProjects.scss'
import FilterSortBlock from "./filterSortBlock/FilterSortBlock";
import { useSelector } from "react-redux";

const AllProjects = () => {
  const allHouses = useSelector((state) => state.house.allHouses)
  return (
    <div className="all-projects-block">
      <p className="all-projects-header-text">All projects</p>
      <FilterSortBlock />
    </div>
  );
};

export default AllProjects;

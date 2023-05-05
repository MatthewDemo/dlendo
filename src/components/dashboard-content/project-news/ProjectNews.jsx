import React from "react";
import "./ProjectNews.scss";
import { useSelector } from "react-redux";

const ProjectNews = ({ activeIndex, setActiveIndex }) => {
  const allHouses = useSelector((state) => state.house.allHouses);

  return (
    <div className="project-news-block">
      <span className="project-news-block-title" id="project-news-block">Project news</span>
      <div className="project-news-block-container">
        <div className="project-news-block-item">
          <img src={allHouses[activeIndex].photos[0]} alt="" />
          <div>Project #1</div>
          <p>26 Oct 2020</p>
          <span>Lockup stage.</span>
        </div>
        <div className="project-news-block-item">
          <img src={allHouses[activeIndex].photos[0]} alt="" />
          <div>Project #1</div>
          <p>25 Oct 2020</p>
          <span>Frame stage.</span>
        </div>
        <div className="project-news-block-item">
          <img src={allHouses[activeIndex].photos[0]} alt="" />
          <div>Project #1</div>
          <p>24 Oct 2020</p>
          <span>The slab or base stage.</span>
        </div>
        <div className="project-news-block-item">
          <img src={allHouses[activeIndex].photos[0]} alt="" />
          <div>Project #1</div>
          <p>23 Oct 2020</p>
          <span>Clearing of the site.</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectNews;

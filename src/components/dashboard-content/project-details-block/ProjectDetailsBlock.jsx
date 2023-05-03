import React from "react";
import "./ProjectDetailsBlock.scss";
import ProjectDetailsLeftBlock from "./project-details-left-block/ProjectDetailsLeftBlock";
import ProjectDetailsRightBlock from "./project-details-right-block/ProjectDetailsRightBlock";

const ProjectDetailsBlock = ({activeIndex, setActiveIndex}) => {

  return (
    <div className="project-details-block">
      <ProjectDetailsLeftBlock
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ProjectDetailsRightBlock activeIndex={activeIndex} />
    </div>
  );
};

export default ProjectDetailsBlock;

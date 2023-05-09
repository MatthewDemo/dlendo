import React from "react";
import "./ProjectDetailsBlock.scss";
import ProjectDetailsLeftBlock from "./project-details-left-block/ProjectDetailsLeftBlock";
import ProjectDetailsRightBlock from "./project-details-right-block/ProjectDetailsRightBlock";

const ProjectDetailsBlock = () => {

  return (
    <div className="project-details-block" id="project-details-block">
      <ProjectDetailsLeftBlock
      />
      <ProjectDetailsRightBlock />
    </div>
  );
};

export default ProjectDetailsBlock;

import React from "react";

import ProjectsComponent from "../../components/Projects";

import "./projects.scss";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className='projects-page'>
      <div className='projects'>
        <ProjectsComponent />
      </div>
    </div>
  );
};

export default Projects;

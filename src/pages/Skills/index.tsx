import React from "react";
import SkillsComponent from "../../components/Skills";

import "./skills.scss";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className='skills-page'>
      <div>
        <SkillsComponent />
      </div>
    </div>
  );
};

export default Skills;

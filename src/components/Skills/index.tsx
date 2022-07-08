import React from "react";
import "./skills.scss";

type Props = {};

const skills = [
  {
    title: "HTML",
    score: 5,
  },
  {
    title: "CSS",
    score: 5,
  },
  {
    title: "JavaScript",
    score: 4,
  },
  {
    title: "TypeScript",
    score: 3,
  },
  {
    title: "ReactJS",
    score: 4,
  },
  {
    title: "NextJS",
    score: 2,
  },
  {
    title: "Sass",
    score: 3,
  },
  {
    title: "Redux",
    score: 3,
  },
  {
    title: "Storybook",
    score: 5,
  },
  {
    title: "Material UI",
    score: 5,
  },
];

const Skills = (props: Props) => {
  return (
    <div className='skills'>
      <h1 className='h1'>My skills</h1>
      <ul className='list'>
        {skills.map((skill, index) => {
          return (
            <li className='list-item' key={index}>
              <div className='skill'>
                <h3 className='skill-header'>{skill.title}</h3>
                <div className='score'>
                  {Array.from(Array(skill.score).keys()).map((_, index) => {
                    return (
                      <i key={index} className='material-icons icon'>
                        star
                      </i>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className='h2'>I have worked with</h2>

      <p className='paragraph'>Django, FastAPI, NestJS for backend APIs</p>
    </div>
  );
};

export default Skills;

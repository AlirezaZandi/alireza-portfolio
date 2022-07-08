import React from "react";
import projectimg from "../../assets/project.png";
import "./projects.scss";

import todoImg from "../../assets/todo.png";
import multiTodoImg from "../../assets/todo-github.png";
import calcImg from "../../assets/calc.png";

type Props = {};

const projects = [
  {
    title: "Todo list",
    description: "ReactJS, Sass",
    img: todoImg,
    demoLink: "https://alirezazandi.github.io/todo-app-react/",
    repoLink: "https://github.com/AlirezaZandi/todo-app-react",
  },
  {
    title: " Multi status todo list",
    description: "ReactJS, MUI, Redux",
    img: multiTodoImg,
    demoLink: "https://multi-status-todo-app.netlify.app/",
    repoLink: "https://github.com/AlirezaZandi/todo-github",
  },
  {
    title: "Calculator",
    description: "Plain HTML, CSS, JS",
    img: calcImg,
    demoLink: "https://alirezazandi.github.io/Calculator/",
    repoLink: "https://github.com/AlirezaZandi/Calculator",
  },
];

const Projects = (props: Props) => {
  return (
    <div className='projects'>
      <h1 className='h1'>My Projects</h1>
      <ul className='list'>
        {projects.map((project) => {
          return (
            <li>
              <div
                className='project'
                style={{ backgroundImage: `url(${project.img})` }}>
                <div className='info'>
                  <div className='text'>
                    <h4 className='header'>{project.title}</h4>
                    <p className='description'>{project.description}</p>
                  </div>
                  <div className='links'>
                    <a
                      className='link'
                      href={project.demoLink}
                      target='_blank'
                      rel='noreferrer'>
                      live demo
                    </a>
                    <a
                      className='link'
                      href={project.repoLink}
                      target='_blank'
                      rel='noreferrer'>
                      repository
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const projects = [
  {
    id: 1,
    title: "Calculatrice",
    description: "Une calculatrice simple et intuitive",
    url: "https://calculette-ashy.vercel.app/",
    image: "/imgs/projects/calculette.PNG",
  },
  {
    id: 2,
    title: "Snake",
    description: "Un jeu de serpent simple et amusant",
    url: "https://snake-attak.vercel.app/",
    image: "/imgs/projects/snakeGame.PNG",
  },
  {
    id: 3,
    title: "To Do List",
    description: "Une liste de tâches à faire",
    url: "https://tegra-s-to-do.vercel.app/",
    image: "/imgs/projects/todo.PNG",
  },
];

export default function Project() {
  return (
    <>
      <Header />

      <div className="projects-container">
        {projects.map((project, index) => (
          <Link
            to={project.url}
            key={project.id}
            className="project-card"
            style={{ "--animation-order": index }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

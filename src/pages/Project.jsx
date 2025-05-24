import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description du projet 1",
    url: "/project/1",
    image: "/images/projet1.jpg",
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description du projet 2",
    url: "/project/2",
    image: "/images/projet2.jpg",
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Description du projet 3",
    url: "/project/3",
    image: "/images/projet3.jpg",
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

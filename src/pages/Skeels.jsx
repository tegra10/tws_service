import React from "react";
import Header from "../components/Header";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiSass,
  DiNodejsSmall,
  DiMongodb,
  DiGit,
  DiNpm,
} from "react-icons/di";
import { SiVuedotjs, SiExpress, SiWebpack, SiJest } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";

export default function Skeels() {
  const skills = {
    frontend: {
      title: "Frontend",
      items: [
        { name: "JavaScript", level: 90, icon: DiJavascript1 },
        { name: "React.js", level: 85, icon: DiReact },
        { name: "Vue.js", level: 75, icon: SiVuedotjs },
        { name: "HTML5", level: 90, icon: DiHtml5 },
        { name: "CSS3/SASS", level: 85, icon: DiSass },
      ],
    },
    backend: {
      title: "Backend",
      items: [
        { name: "Node.js", level: 85, icon: DiNodejsSmall },
        { name: "Express.js", level: 80, icon: SiExpress },
        { name: "MongoDB", level: 75, icon: DiMongodb },
        { name: "RESTful APIs", level: 85, icon: FaExchangeAlt },
      ],
    },
    tools: {
      title: "Outils & Autres",
      items: [
        { name: "Git", level: 85, icon: DiGit },
        { name: "npm/yarn", level: 80, icon: DiNpm },
        { name: "Webpack", level: 75, icon: SiWebpack },
        { name: "Jest", level: 70, icon: SiJest },
      ],
    },
  };

  return (
    <div className="page-container">
      <Header />
      <section className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Compétences Techniques</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([key, category]) => (
              <div key={key} className="skills-category">
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <skill.icon />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="skill-progress-glow"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

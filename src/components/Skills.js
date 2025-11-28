import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux, SiTypescript } from "react-icons/si";

const Skills = () => {
  const Skills = [
    { name: "HTML", level: "95%", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", level: "90%", icon: <FaCss3Alt className="icon css" /> },
    { name: "JavaScript", level: "85%", icon: <SiJavascript className="icon js" /> },
    { name: "React JS", level: "80%", icon: <FaReact className="icon react" /> },
    { name: "Bootstrap", level: "85%", icon: <FaBootstrap className="icon bootstrap" /> },
    { name: "Tailwind CSS", level: "80%", icon: <SiTailwindcss className="icon tailwind" /> },
    { name: "Redux", level: "75%", icon: <SiRedux className="icon redux" /> },
    { name: "TypeScript", level: "70%", icon: <SiTypescript className="icon ts" /> },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Frontend Developer Skills</h2>

      <div className="skills-grid">
        {Skills.map((Skill, index) => (
          <div key={index} className="skill-card">
            {Skill.icon}
            <h3>{Skill.name}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: Skill.level }}></div>
            </div>
            <span className="skill-level">{Skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

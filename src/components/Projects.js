import React from "react";
import "./Projects.css";
import mypic from "../Images/portfolio.1.jpg";
import pic from "../Images/portfolio.2.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "Restaurant Website",
      description: "A modern restaurant website built with HTML and responsive UI design.",
      tech: "HTML, CSS, JavaScript",
      image: mypic,
    },
    {
      title: "Garden Website",
      description:
        "A beautifully designed garden-themed website built using HTML and CSS, featuring a clean layout, plant sections, and a nature-inspired interface.",
      tech: "HTML, CSS",
      image: pic,
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            
            {/* ONE IMAGE ONLY */}
            <img src={project.image} alt={project.title} className="project-image" />

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

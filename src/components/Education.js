import React from "react";
import "./Education.css"; // <-- Create this file for styling

const Education = () => {
  const educationData = [
    {
      year: "2023 - 2025",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Muslim  Arts College ",
      description:
        "Focused on programming, web development, database management and software engineering.",
    },
    {
      year: "2021 - 2022",
      degree: "Higher Secondary Education (HSC)",
      institution: "st.mary goretty Hr. Sec. School",
      description:
        "Completed higher secondary with  science major.",
    },
    {
      year: "2019- 2020",
      degree: "SSLC",
      institution: "st.mary goretty Hr. Sec. School",
      description:
        "Completed schooling with strong fundamentals in maths & science.",
    },
  ];

  return (
    <div className="education section" id="education">
      <h2 className="section-title text-center">Education</h2>

      <div className="container mt-4">
        {educationData.map((edu, index) => (
          <div className="edu-card" key={index}>
            <div className="edu-year">{edu.year}</div>
            <div className="edu-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

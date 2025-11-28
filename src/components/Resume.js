// import React from "react";
// import "./Resume.css";

// const Resume = () => {
//   return (
//     <div className="resume-container">
//       <h1 className="resume-title">My Resume</h1>

//       <div className="resume-section">
//         <h2>Personal Details</h2>
//         <p><strong>Name:</strong> Gowri Krishna AS</p>
//         <p><strong>Email:</strong>gowrikrishna862004@gmail.com</p>
//         <p><strong>Phone:</strong>9961708610</p>
//         <p><strong>Location:</strong>Nagerkovil</p>
//       </div>

//       <div className="resume-section">
//         <h2>Education</h2>
//         <ul>
//           <li>
//             <strong>Bachelor of Computer Applications</strong><br />
//             Muslim Arts College (2023–2025)
//           </li>
//           <li>
//             <strong>Higher Secondary School</strong><br />
//             st.mary goretty hr sec school (2021–2022)
//           </li>
//         </ul>
//       </div>

//       <div className="resume-section">
//         <h2>Skills</h2>
//         <ul className="skills-list">
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>React JS</li>
//           <li>Bootstrap</li>
//           <li>Git / GitHub</li>
//         </ul>
//       </div>

//       <div className="resume-section">
//         <h2>Experience</h2>
//         <p><strong>Frontend Developer Intern</strong></p>
//         <p>XYZ Company | 2023</p>
//         <ul>
//           <li>Designed and developed responsive web pages.</li>
//           <li>Worked with React, Bootstrap, and APIs.</li>
//           <li>Improved website performance and UI/UX.</li>
//         </ul>
//       </div>

//       <div className="resume-section">
//         <h2>Projects</h2>
//         <ul>
//           <li>
//             <strong>Portfolio Website</strong> – A personal portfolio built using React and Bootstrap.
//           </li>
//           <li>
//             <strong>Restaurant Website</strong> – A responsive HTML, CSS, JS project.
//           </li>
//           <li>
//             <strong>Weather App</strong> – Uses API to display weather details.
//           </li>
//         </ul>
//       </div>

//       <div className="resume-section">
//         <h2>Download Resume</h2>
//         <a className="resume-download" href="/resume.gowri.pdf" download>
//           Download PDF
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Resume;
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      <div className="resume-section">
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Gowri Krishna AS</p>
        <p><strong>Email:</strong> gowrikrishna862004@gmail.com</p>
        <p><strong>Phone:</strong> 9961708610</p>
        <p><strong>Location:</strong> Nagerkovil</p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Computer Applications</strong><br />
            Muslim Arts College (2023–2025)
          </li>
          <li>
            <strong>Higher Secondary School</strong><br />
            St. Mary Goretty HR Sec School (2021–2022)
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Bootstrap</li>
          <li>Git / GitHub</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>
        <p><strong>Frontend Developer Intern</strong></p>
        <p>XYZ Company | 2023</p>
        <ul>
          <li>Designed and developed responsive web pages.</li>
          <li>Worked with React, Bootstrap, and APIs.</li>
          <li>Improved website performance and UI/UX.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio Website</strong> – Built using React and Bootstrap.</li>
          <li><strong>Restaurant Website</strong> – Responsive HTML, CSS, JS project.</li>
          <li><strong>Weather App</strong> – Uses API to display weather details.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Download Resume</h2>
        <a className="resume-download" href="/resume.gowri.pdf" download>
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;


// import React from "react";
// import "./Homess.css";
// import Img from "../../Images/gowri.jpg";
// import {link} from "react-router-dom";

// const Homess = () => {
//   return (
//     <div>
//       <section className="home">
//         <div className="container intro">

//           <img src={Img} alt="Profile" className="profile-pic" />

//           <div className="intro-text">
//             <h1>Hello! </h1>
//             <p>
//               I'm <strong>GOWRI KRISHNA</strong>,am a passionate Web Developer skilled in creating modern, responsive, and user-friendly websites. I focus on clean design, performance, and seamless user experience using the latest web technologies.
//             </p>

//             <p>
//               Front-End Developer | UI/UX Designer | React Developer
//               <br></br>
//               <br></br>
//               Web Designer | Creative UI Developer | JavaScript Specialist
//               <br></br>
//               <br></br>
//               MERN Stack Developer | Responsive UI Builder | Modern Web Apps
              
//             </p>

//             Contact Info
//             <div className="contact-info">
//               <p><strong>Email:</strong> gowrikrishna862004@gmail.com</p>
//               <p><strong>Phone:</strong> +91 9961708610</p>
//               <p><strong>Behance:</strong> behance.net/kataocado</p>
//               <p><strong>LinkedIn:</strong> linkedin.com/in/gowri-krishna</p>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Homess;

import "./Homess.css";
// import Img from "../img/gowri.jpg"; // Make sure path is correctS
import Img from "../Images/gowri.jpg";


const Homess = () => {
  return (
    <section className="home">
      <div className="container intro">

        {/* Profile Image */}
        <div className="image-container">
          <img src={Img} alt="Profile" className="profile-pic" />
        </div>

        {/* Intro Text */}
        <div className="intro-text">
          <h1>Hello </h1>
          <h2>I'm <strong>GOWRI KRISHNA</strong></h2>

          <p className="subtitle">
            Front-End Developer | UI/UX Designer | React Developer
          </p>

          <p className="description">
            I create modern, responsive, and user-friendly websites with clean UI and seamless user experience. I'm passionate about building real-world projects using the latest technologies and creative design.
          </p>

          {/* Skills / Specializations */}
          <div className="skills">
            <p>✨ Web Designer</p>
            <p>✨ MERN Stack Developer</p>
            <p>✨ Creative UI Developer</p>
            <p>✨ JavaScript Specialist</p>
          </div>

          {/* Contact */}
          <div className="contact-info">
            <p><strong>Email:</strong> gowrikrishna862004@gmail.com</p>
            <p><strong>Phone:</strong> +91 9961708610</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/gowri-krishna</p>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Homess;




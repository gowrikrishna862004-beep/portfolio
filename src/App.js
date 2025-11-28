// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homess from "./components/Homess";
import Education from"./components/Education";
import Resume from"./components/Resume";
import Skills from"./components/Skills";
import About from"./components/About";
import Projects from"./components/Projects";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homess />} />
  
       
        <Route path="/contact" element={<Contact />} />
         <Route path="/Education" element={<Education/>} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills"element={<Skills/>}/>
          <Route path="/About"element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;









import React from "react";

// import { Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          Portfolio & Resume
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/Education">Education</NavLink>
          <NavLink to="/Skills">Skills</NavLink>
          <NavLink to="/Resume">Resume</NavLink>
          <NavLink to="/Projects">projects</NavLink>
          
  

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

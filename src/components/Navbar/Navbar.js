import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar flex">
      <div className="heading">
        <p>Portfolio Website</p>
      </div>
      <div className="links">
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
      <div class="menu-toggle" onClick={''}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;

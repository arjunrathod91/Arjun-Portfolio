import React, { useState } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { Close } from "@mui/icons-material";

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
            <a href="#educations">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="menu-toggle" onClick={()=>setOpen(!open)}>
        {!open ? (
          <>
            <div class="menubar"></div>
            <div class="menubar"></div>
            <div class="menubar"></div>
          </>
        ) : (
          <Close sx={{fontSize:'30px'}}/>
        )}
      </div>
      {open && <Sidebar open={open} setOpen={setOpen} />}
    </div>
  );
}

export default Navbar;

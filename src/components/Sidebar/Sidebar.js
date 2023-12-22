import React, { useState } from "react";
import "./Sidebar.css";
import { click } from "@testing-library/user-event/dist/click";
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({open,setOpen}) {
  return (
    <div className="sidebar">
        <ul className="mylinks">
      <a href="#home">Home</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      </ul>
      <div className="cancel" onClick={()=>setOpen(!open)}><CloseIcon sx={{fontSize:30}}/></div>
    </div>
  );
}

export default Sidebar;

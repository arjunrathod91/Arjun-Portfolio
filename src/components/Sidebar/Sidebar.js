import React from "react";
import "./Sidebar.css";

function Sidebar({open,setOpen}) {
  return (
    <div className="sidebar">
        <ul className="mylinks">
      <a href="#home" onClick={()=>setOpen(!open)}>Home</a>
      {/* <a href="#educations" onClick={()=>setOpen(!open)}>Education</a> */}
      <a href="#skills" onClick={()=>setOpen(!open)}>Skills</a>
      <a href="#projects" onClick={()=>setOpen(!open)}>Projects</a>
      <a href="#contact" onClick={()=>setOpen(!open)}>Contact</a>
      </ul>
    </div>
  );
}

export default Sidebar;

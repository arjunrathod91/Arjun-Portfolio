import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { animate, motion } from "framer-motion";
import Cursor from "../Cursor/Cursor";
import Education from "../Education/Education";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
    const el = useRef(null);
  const newVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Web Devloper</i>','<i>Web Designer</i>'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div>
      <Navbar />
      <div className="hero space-around flex">
        <div
          className="left"
          // variants={newVariant}
          // initial="initial"
          // // animate="animate"
          // whileInView="animate"
        >
          <strong>
            {/* <span className="name">Arjun Rathod</span> */}
            Hii It's Me  <span className="name">Arjun Rathod</span>
          </strong>
          <br/>
          <span ref={el} className="role"></span>
            <p className="para">
              Strong interest in web development and programming.Looking for a
              Web Developer position.
            </p>
            <div className="buttons">
              <a href="https://github.com/arjunrathod91">Github</a>
              <a href="https://arjunrathod91.github.io/Portfolio_Website/Accets/Arjun%20Rathod%20Intern%20Web%20Devloper.pdf">Resume</a>
            </div>
        </div>
        <div className="right">
          <img src={"/Img/new.jpeg"} alt="" className="profile" />
        </div>
      </div>
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default Home;

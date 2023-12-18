import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <Navbar />
      <div className="hero space-around flex">
        <motion.div
          className="left"
          variants={newVariant}
          initial="initial"
          // animate="animate"
          whileInView="animate"
        >
          <motion.strong>
            Hii It's Me <span className="name">Arjun Rathod</span>
          </motion.strong>
          <br/>
            <motion.span className="role">Web Devloper</motion.span>
            <motion.p className="para">
              Strong interest in web development and programming.Looking for a
              Web Developer position.
            </motion.p>
            <motion.div className="buttons">
              <a href="https://arjunrathod91.github.io/Portfolio_Website/Accets/Arjun%20Rathod%20Intern%20Web%20Devloper.pdf">Github</a>
              <a href="https://github.com/arjunrathod91">Resume</a>
            </motion.div>
        </motion.div>
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

import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer from "../Footer/Footer";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeetcode } from "@fortawesome/free-brands-svg-icons";

function Home() {

  return (
    <div id="home">
      <Navbar />
      <div className="hero">
        <div
          className="left"
        >
          <strong>
          Hii It's Me 
          
          <br/>
          <span className="name">Arjun Rathod</span>
          </strong>
          <br />
          <span className="role">Full Stack Web Developer</span> <br />
          <p className="para">
            Strong foundation in web development and programming. Seeking a Web Developer role to build scalable applications and grow as a software engineer.
          </p>
          <div className="buttons">
            <a href="https://github.com/arjunrathod91"><GitHubIcon/> GitHub</a>
            <a href="https://drive.google.com/file/d/1NHIKvHtgj-Yfs8p6cxvg_SC_bTFCyVVK/view?usp=drive_link">
              <FilePresentIcon/>Resume
            </a>
            <a href="https://leetcode.com/u/arjunrathod">
              <FontAwesomeIcon icon={faLeetcode} size="lg" style={{fontSize:'20px'}} />Leetcode
            </a>
          </div>
        </div>
        <div className="right">
          <img src="Img/arjun rathod jpg.jpg" loading="lazy" alt="" className="hero-profile" />
        </div>
      </div>
      <Skills />
      {/* <Services/> */}
      {/* <Review/> */}
      {/* <Educations/> */}
      <Projects />
      <Contact />
      <Footer />
      {/* <Skills />
      <Services/>
      <Review/>
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Home;

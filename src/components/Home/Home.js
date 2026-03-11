import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer from "../Footer/Footer";
import FilePresentIcon from '@mui/icons-material/FilePresent';

function Home() {
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["<i>Frontend Devloper</i>", "<i>Backend Devloper</i>","<i>Full Stack Devloper</i>"],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div id="home">
      <Navbar />
      <div className="hero">
        <div
          className="left"
        >
          {/* ref={el}  */}
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
            <a href="https://drive.google.com/file/d/1Mu6hh7ww4IoTqZndaHNmn7N-EhK57a9n/view?usp=drive_link">
              <FilePresentIcon/>Resume
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
      {/* <Education /> */}
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

import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Skills from "../Skills/Skills";

function Projects() {
  const projects = [
    {
      title: "Ichatapp",
      desc: "Ichatapp is a website where two or multiple users can express their thoughts and chat on a single server. I build this website with help of simple Html,Css, Javascript and for server-side i used node js. For communicating with servers I used Socket.io.",
      img: "/Projects/Ichatapp.png",
      github: "https://github.com/arjunrathod91/chatapp",
      demo: "https://chatapparjun.onrender.com/",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
        "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
        "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        "https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain",
        "https://branditechture.agency/brand-logos/wp-content/uploads/2023/05/Socket-Io.png",
      ],
    },
    {
      title: "IshopStore",
      desc: "IshopStore is a e-commerce wesbite build with ReactJs. I made by watching a Lamadev toutorial. I learned lot of things while building this full fledged wesbite also intgrating a backend and database in it.Also learned how to manage multiple components.",
      img: "https://i.postimg.cc/PrSFv4fc/ishopstore-img.png",
      github: "https://github.com/arjunrathod91/Ishopstore",
      demo: "https://ishopstore-ecommerce.onrender.com/",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/919/919851.png",
        "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        "https://www.liblogo.com/img-logo/mo429m311-mongodb-logo-mongodb-logo-.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      ],
    },
    {
      title: "HelpYours",
      desc: "HelpYours is platform which encourage people to help each other. Where user can simply send a request to nearest organizations and organizations can understand thier needs and can get in touch with them.",
      img: "https://i.postimg.cc/cC8KQWVC/helpyours.png",
      github: "https://github.com/arjunrathod91/logisticsapp",
      demo: "https://logisticsapp-nine.vercel.app/",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/919/919851.png",
        "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        "https://www.liblogo.com/img-logo/mo429m311-mongodb-logo-mongodb-logo-.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      ],
    },
    {
      title: "Dashboard UI",
      desc: "Dashboard UI I build for testing my UI design skills. This is a simple UI used in lot of buiseness websites for analytic purpose.",
      img: "/Projects/dashboard.png",
      github: "",
      demo: "https://arjundashboard.netlify.app/",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/919/919851.png",
        "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        "https://www.liblogo.com/img-logo/mo429m311-mongodb-logo-mongodb-logo-.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      ],
    },
    {
      title: "News App",
      desc: "News App is website i build with Html,Css and javascript. In this i used News Api for Api data fetching. Also tried to integrate a search by quory functionality.",
      img: "https://i.postimg.cc/CLFwgSKg/news-app.jpg",
      github: "https://github.com/arjunrathod91/TodayIndiaNews",
      demo: "",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/919/919851.png",
        "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        "https://www.liblogo.com/img-logo/mo429m311-mongodb-logo-mongodb-logo-.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      ],
    },
    {
      title: "Remote Connect",
      desc: "Remote Connect is website I build with in a hackthon compitition with my team senior.",
      img: "/Projects/remoteconnect.png",
      github: "https://github.com/arjunrathod91/Remote_Connect",
      demo: "https://arjunrathod91.github.io/Remote_Connect/",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/919/919851.png",
        "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        "https://www.liblogo.com/img-logo/mo429m311-mongodb-logo-mongodb-logo-.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      ],
    },
      {
      title: "NoteApp",
      desc: "Noteapp is a website with a very simple note design. Where user can store his short or long notes in thier localstorage. I also tried to integrate a date and time functionality.",
      img: "/Projects/noteapp.png",
      github: "https://github.com/arjunrathod91/Notes_App",
      demo: "https://arjunnoteapp.netlify.app/",
      skill: [
        "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
        "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      ],
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      
      <div className="project-div">
        {projects.map((item) => (
          <div
            className="proj-cont"
            style={{}}
            item={item}
          >
            <div className="proj-img">
              <img src={item.img} alt="" />
            </div>
            <div className="proj-info">
              <strong>{item.title}</strong>
              <div className="icons">
                {item.skill.map((icon) => (
                  <img src={icon} alt="" />
                ))}
              </div>
              <p>{item.desc.substring(0,290)}</p>
              <div className="button">
                <button className="btn">
                  <a href={item.github}>Github</a>
                </button>
                <button className="btn">
                  <a href={item.demo}>Demo</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

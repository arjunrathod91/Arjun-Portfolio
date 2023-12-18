import "./Education.css";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Education() {
  const [story, setStory] = useState("");
  const [distance, setDistance] = useState(0);
  let walk = distance;
  const [num, setNum] = useState(0);
  let rank = num;

  const stories = [
    {
      plot: "I did my 10th from Utkarsh School with 89%",
      year: 2020,
    },
    {
      plot: "I did my 12th from Sir Parshurambhau College with 49%",
      year: 2022,
    },
    {
      plot: "Then I taken admission to Mechanical Engineering in Sinhgad College Of Engineering",
      year: 2022,
    },
    {
      plot: " Because of lack of interest in Mechanical Studies i took a drop for persuing my Web Devloping Cureer",
      year: 2023,
    },
    {
      plot: "Currently I am learning and seeking for opportunities",
      year: "",
    },
  ];

  const changeEvent=()=>{
    if(distance < 1000){
      setDistance(walk+200)
      setNum((rank += 1));
      setStory(stories[num].plot);
    }
    else{
      window.location.reload()
    }
  }

  useEffect(() => {
    console.log("position is changed");
  }, [distance]);

  const variants = {
    initial: {
      y:-10,
      opacity:0,

    },
    animate: {
      y:0,
      opacity:1,
      transition: {
        duration: 0.5,
      },

    },
  };
  console.log(distance)
  return (
    <div className="education">
      <div className="edu-head">
        <strong className="heading">Education</strong>
        <div className="line"></div>
      </div>
      <div className="story">
        <div className="story-explainer">
          {distance ? (
            <motion.strong
            key={story}
              className="plot"
              variants={variants}
              initial="initial"
              whileInView="animate"
            >
              {story}
            </motion.strong>
          ) : (
            ""
          )}
        </div>
        <div className="characters">
          <img
            className="hero"
            src={"/Education/small boy walk.png"}
            alt=""
            style={{ left: `${distance}px` }}
          />
          <ArrowForwardIcon className="start" onClick={changeEvent} sx={{ color: "black"}} />
          <img className="school" src={"/Education/school (1).png"} alt="" />
          <img
            src={"/Education/sir parshurambhau collge png.jpg"}
            alt=""
            className="college"
          />
          <img
            src={"/Education/sinhgad college png.jpg"}
            alt=""
            className="engineering"
          />
          <img src={"/Education/coder.png"} alt="" className="coder" />
          <img src={"/Education/success.png"} alt="" className="success" />
        </div>
        <div className="respo-edu"></div>
        {/* <div className="line"></div> */}
      </div>
    </div>
  );
}

export default Education;

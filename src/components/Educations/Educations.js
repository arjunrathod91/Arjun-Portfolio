import React from "react";
import "./Educations.css";
import { motion } from "framer-motion";

function Educations() {
  const education = [
    {
      title: "BE in Mechanical Engineering",
      desc: [
        "From : NBN School of Engineering",
        "Droped Out after 1 and half year",
      ],
      year: "2023",
    },
    {
      title: "Higher Secondary Board(HSC)",
      desc: ["From : Sir Parshurambhau College", "With score 47%"],
      year: "2021 - 2022",
    },
    {
      title: "Secondary State Board(SCC)",
      desc: ["From : Utkarsh Madhyamik School", "With score 89%"],
      year: "2020",
    },
  ];

  const newVarients = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="educations" id="educations">
      <div className="edu-head">
        <strong className="heading">Education</strong>
        <div className="line"></div>
      </div>
      <motion.div
        className="edu-info"
        variants={newVarients}
        initial="initial"
        whileInView="animate"
      >
        {education.map((item) => (
          <div className="edu-box">
            <p>{item.year}</p>
            <strong>{item.title}</strong>
            <p>
              <li>{item.desc[0]}</li>
            </p>
            {item.desc[1] ? (
              <p>
                <li>{item.desc[1]}</li>
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
        <div className="bar"></div>
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </motion.div>
    </div>
  );
}

export default Educations;

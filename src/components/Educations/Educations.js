import React from "react";
import "./Educations.css";
import { motion } from "framer-motion";

function Educations() {
  const education = [
    {
      title: "BE in Mechanical Engineering",
      desc: [
        // "From : NBN School of Engineering",
      ],
      year: "2022-2023",
    },
    // {
    //   title: "Higher Secondary Board(HSC)",
    //   desc: ["From : Sir Parshurambhau College", "With score 47%"],
    //   year: "2021 - 2022",
    // },
    // {
    //   title: "Secondary State Board(SCC)",
    //   desc: ["From : Utkarsh Madhyamik School", "With score 89%"],
    //   year: "2020",
    // },
  ];

  return (
    <div classNameName="educations" id="educations">
      <div classNameName="edu-head">
        <strong classNameName="heading">Education</strong>
        <div classNameName="line"></div>
      </div>
      <div
        classNameName="edu-info"

      >
        {education.map((item) => (
          <div classNameName="edu-box">
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
      </div>
    </div>
  );
}

export default Educations;

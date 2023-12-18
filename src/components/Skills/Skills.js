import React from 'react'
import './Skills.css'
import {motion} from 'framer-motion'
import { Opacity } from '@mui/icons-material';

function Skills() {
    const webDevlopment = [
        {
          title: "HTML",
          img: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
        },
        {
          title: "CSS",
          img: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        },
        {
          title: "Javascript",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
        },
        {
          title: "React",
          img: "https://cdn-icons-png.flaticon.com/128/919/919851.png",
        },
        {
          title: "Node",
          img: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
        },
        {
          title: "Express",
          img: "",
        },
        {
          title: "MongoDb",
          img: "",
        },
        {
          title: "Python",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        },
      ];
      const others = [
        {
          title: "Python",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        },
        {
          title: "Python",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        },
        {
          title: "Python",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        },
        {
          title: "Python",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        },

      ]
  return (
    <div className="skills" id="skills">
        <div className="skill-head">
        <strong className="heading">Skills</strong>
        <div className="line"></div>
      </div>
        <div className='container'>
          <div className='web-dev'>
            <strong className='title'>Web Devlopment</strong>
            {
              webDevlopment.map((item)=>(
                <div item={item} className='box1'>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
              ))
            }

          </div>
          <div className='others'>
          <strong className='title'>Others</strong>
            {
              webDevlopment.map((item)=>(
                <div item={item} className='box1'>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default Skills
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
          img: "https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain",
        },
        {
          title: "MongoDb",
          img: "https://www.liblogo.com/img-logo/mo429m311-mongodb-logo-mongodb-logo-.png",
        },
        {
          title: "Python",
          img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
        }, 
      ];
      const others = [
        {
          title: "Visual Studio Code",
          img: "https://th.bing.com/th/id/OIP.PEsu4Jw9kb-jeGjGCYlppwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          title: "Netlify",
          img: "https://th.bing.com/th/id/OIP.OzH3GxFfwZzmf5YAofUkSgAAAA?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          title: "github",
          img: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
        },
        {
          title: "Varcel",
          img: "https://th.bing.com/th/id/OIP.qMKw3u8T1ULw65j9fPrPZAAAAA?rs=1&pid=ImgDetMain",
        },
        {
          title: "Socket.Io",
          img: "https://branditechture.agency/brand-logos/wp-content/uploads/2023/05/Socket-Io.png",
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
             others.map((item)=>(
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
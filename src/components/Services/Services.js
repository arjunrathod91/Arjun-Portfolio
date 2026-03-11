import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web Developement",
      img: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png",
      exp: "2 years of exp",
    },
    {
      title: "Android Development",
      img: "https://www.pngmart.com/files/Android-App-Development-PNG.png",
      exp: "2 years of exp",
    },
    {
      title: "UI UX Designer",
      img: "https://png.pngtree.com/png-vector/20220111/ourmid/pngtree-business-office-chart-internet-technology-sense-blue-2-5d-png-image_4196701.png",
      exp: "2 years of exp",
    },
  ];
  return (
    <div className="services">
      <h2>Services</h2>
      <div className="serv-box">
        {services.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} alt={item.title}/>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <strong style={{ color: "white" }}>{item.title}</strong>
              <p>{item.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";

function Skills() {
  const languages = [
    {
      title: "Javascript",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      title: "C++",
      img: "https://tse3.mm.bing.net/th/id/OIP.iUm_yG_BDvFQWZTrZD6UCwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];
  const frontend = [
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
    // {
    //   title: "Typescript",
    //   img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    // },
    {
      title: "React",
      img: "https://cdn-icons-png.flaticon.com/128/919/919851.png",
    },
    {
      title: "Next",
      img: "https://th.bing.com/th/id/OIP.d-cssZMmcDWJU_yKxt9abQHaFQ?rs=1&pid=ImgDetMain",
    },
    {
      title: "Vue",
      img: "https://th.bing.com/th/id/OIP.xUOSgI0zAbQPrErd1QQiZQHaGZ?rs=1&pid=ImgDetMain",
    },
    {
      title: "Figma",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      title: "Tailwind CSS",
      img: "https://th.bing.com/th/id/OIP.o7c7ftXCLdQDsfE9NkWCvwHaGb?rs=1&pid=ImgDetMain",
    },
    // {
    //   title: "Bootstrap",
    //   img: "https://th.bing.com/th/id/OIP.1UEzXtZO-5Tg97z8SCrYrQHaFj?rs=1&pid=ImgDetMain",
    // },
    // {
    //   title: "Shadcn",
    //   img: "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
    // },
    // {
    //   title: "Material UI",
    //   img: "https://th.bing.com/th/id/OIP.mORoWuR07reOuNwUkcA8SgAAAA?rs=1&pid=ImgDetMain",
    // },
  ];

  const backend = [
    {
      title: "Node.Js",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    },
    {
      title: "Express.Js",
      img: "https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain",
    },
    {
      title: "MongoDB",
      img: "https://th.bing.com/th/id/OIP.AoFmhuVcQWFwCx4G2ZnuJQHaIq?rs=1&pid=ImgDetMain",
    },
    // {
    //   title: "Php",
    //   img: "https://th.bing.com/th/id/OIP.pkqphAig1t-PCsy4dkVrfAHaD5?rs=1&pid=ImgDetMain",
    // },
    // {
    //   title: "MySQL",
    //   img: "https://th.bing.com/th/id/OIP.urLHYMYPFxkcs6AC4Io9vwHaHa?rs=1&pid=ImgDetMain",
    // },
    // {
    //   title: "PostGreSQL",
    //   img: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/ffc47c45-e0ba-4c50-8684-9ab688fad82f.png?auto=format&q=50&fit=fill",
    // },
    // {
    //   title: "Python",
    //   img: "https://th.bing.com/th/id/OIP.dJToM1TiZiJA0GYwzDHwjQAAAA?rs=1&pid=ImgDetMain",
    // },
    // {
    //   title: "Java",
    //   img: "https://th.bing.com/th/id/OIP.LR_MXSyvtgzDqEzndy5RWAHaEK?rs=1&pid=ImgDetMain",
    // },
    // {
    //   title: "C++",
    //   img: "https://logowik.com/content/uploads/images/911_c_logo.jpg",
    // },
  ];

  // const devops = [
  //   {
  //     title: "Docker",
  //     img: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
  //   },
  //   {
  //     title: "Kubernatives",
  //     img: "https://th.bing.com/th/id/OIP.nQgO4MuGNT3abdh1dWFH6wHaHM?rs=1&pid=ImgDetMain",
  //   },
  //   {
  //     title: "AWS",
  //     img: "https://registry.terraform.io/images/providers/aws.png",
  //   },
  //   {
  //     title: "Google Cloud",
  //     img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  //   },
  //   {
  //     title: "Microsoft Azure",
  //     img: "https://logos-world.net/wp-content/uploads/2021/03/Azure-Logo-2020-present.png",
  //   },
  //   {
  //     title: "Linux",
  //     img: "https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo-1996-present.png",
  //   },
  // ];
  const Other = [
    {
      title: "Visual Studio Code",
      img: "https://th.bing.com/th/id/OIP.PEsu4Jw9kb-jeGjGCYlppwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    // {
    //   title: "Netlify",
    //   img: "https://th.bing.com/th/id/OIP.OzH3GxFfwZzmf5YAofUkSgAAAA?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    // },
    {
      title: "github",
      img: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
    },
    {
      title: "Varcel",
      img: "https://th.bing.com/th/id/OIP.qMKw3u8T1ULw65j9fPrPZAAAAA?rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <div className="skills" id="skills">
      <strong className="heading">Skills</strong>
      <div className="skill-div">
        <div
          className="flex flex-col justify-start items-center"
          style={{ margin: "20px", borderRadius: "10px" }}
        >
          <strong className="text-2xl mt-[20px]">Languages</strong>
          <div className="box">
            {languages.map((item) => (
              <div item={item} className="box1">
                <img src={item.img} alt="" />
                {/* <p>{item.title}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center"
          style={{ margin: "20px", borderRadius: "10px" }}
        >
          <strong className="text-2xl mt-[20px]">FrontEnd</strong>
          <div className="box">
            {frontend.map((item) => (
              <div item={item} className="box1">
                <img src={item.img} alt="" />
                {/* <p>{item.title}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center"
          style={{ margin: "20px", borderRadius: "10px" }}
        >
          <strong className="text-2xl mt-[20px]">Backend</strong>
          <div className="box">
            {backend.map((item) => (
              <div item={item} className="box1">
                <img src={item.img} alt="" />
                {/* <p>{item.title}</p> */}
              </div>
            ))}
          </div>
        </div>
        {/* <div
          className="flex flex-col justify-start items-center"
          style={{ margin: "20px", borderRadius: "10px" }}
        >
          <strong className="text-2xl mt-[20px]">Devops</strong>
          <div className="box">
            {devops.map((item) => (
              <div item={item} className="box1">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div> */}
        <div
          className="flex flex-col justify-start items-center"
          style={{ margin: "20px", borderRadius: "10px" }}
        >
          <strong className="text-2xl mt-[20px]">Others</strong>
          <div className="box">
            {Other.map((item) => (
              <div item={item} className="box1">
                <img src={item.img} alt="" />
                {/* <p>{item.title}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

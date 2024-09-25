import React from "react";

import Classes from "../Styles/Services.module.css";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

function Service() {
  const data = [
    {
      icon: service1,
      title:"GUIDED TOURS", 
      subTitle:
      " "
    },  
    {
      icon: service2,
      title: "ITERNARY PLANNING AND BOOKING",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment while experiencing value for your money.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you under one roof.",
    },
    {
      icon: service4,
      title:"Yet Another",
      subTitle:
        "WHERE WE MAKE DREAMS COMES TRUE.",
    },
  ];

  return (
  
    <section id="service" className={Classes.service}>
      
      {data.map((item) => {
        return (
          <div className={Classes.services}>
            
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Service;

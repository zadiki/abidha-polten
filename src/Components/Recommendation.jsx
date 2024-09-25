import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination9 from "../assets/Destination9.jpg";
import Destination10 from "../assets/Destination10.jpg";
import Destination7 from "../assets/Destination7.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination9,
      title: "Kenya",
      subTitle: "Amboseli National Park",
    
      duration: "Approx 2 night trip",
    },
    {
      image: Destination10,
      title: "Uganda",
      subTitle: "Lake Bunyonyi",
      duration: "",
    },
    {
      image: Destination7,
      title: "Tanzania",
      subTitle: "Lake Manyara with Flamingos",
      duration: "Approx 2 night trip",
    },
    
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Explore and Experience Nature.</h1>
      
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                

               
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;

import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import image2 from "../assets/image2.jpg";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
   
      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={image2} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              Poltens Adventures
            </h1>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

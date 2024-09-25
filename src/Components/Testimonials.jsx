import React from "react";

import Classes from "../Styles/Testimonials.module.css";
import "../Styles/Recommendation.css";
import avatar from "../assets/image1.jpg";
import avatar2 from "../assets/image2.jpg";
import avatar3 from "../assets/image4.jpg";
import avatar4 from "../assets/image7.jpg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section >
      <section id="testimonials" className="recommendation">
        <div className="title">
          <h1>About Us</h1>

        </div>

        <div className="recommendationBox">

          <div className="box">

            <h3>COMAPANY OVERVIEW</h3>
            <p>Poltens Adventures takes you on awe-inspiring memorable safari in discovering Kenya,Tanzania and Rwanda</p>
           <p>Tours that combines adventure,luxury and local culture</p>
           <p>The Kenyas beauty wrapped in her rich sceneries,wide range of wildlife and culture of her people,</p>
           <p>that makes your tour memorable</p>
          </div>

          <div className="box">

            <h3>Mission</h3>

           <p>To create unforgettable and transformative travel experiences that ignite a passion for adventure, exploration, and cultural immersion</p>
            <p>while fostering responsible tourism practices and supporting the destinations we explore.</p>  </div>

          <div className="box">

            <h3>Vision</h3>
            <p>To be the leading provider of innovative and inspiring state-based tourism and adventure experiences, recognized for exceeding guest expectations, championing sustainability, and leaving a positive impact on the communities we visit.To be the leading provider of innovative and inspiring state-based tourism and adventure experiences, recognized for exceeding guest expectations, championing sustainability, and leaving a positive impact on the communities we visit.</p>
          </div>

          <div className="box">

            <h3>Contact Information</h3>
            <p>Phone: 0710154470</p>
            <p>Email:poltensadventures@gmail.com</p>

           

          </div>


        </div>
      </section>
      <h1>Gallary</h1>
      <section id="testimonials" className={Classes.testimonials}>
        <div className={Classes.boxContainer}>
          <div >

            <p>
              MASAI 
            </p>

            <div >
              <img src={avatar} alt="image" />
              <div>
                <h3>Zebras</h3>
                <span>Mt Longonot</span>
              </div>
            </div>
          </div>

          <div >


            <p>
              
            </p>

            <div >
              <img src={avatar2} alt="image" />
              <div>
                <h3>BIG 5</h3>
                <span>Masai Mara National Park</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" className={Classes.testimonials}>
        <div className={Classes.boxContainer}>
          <div >

            <p>
              
            </p>

            <div >
              <img src={avatar3} alt="image" />
              <div>
                <h3>Zebras</h3>
                <span></span>
              </div>
            </div>
          </div>

          <div >


            <p>
            
            </p>

            <div >
              <img src={avatar4} alt="image" />
              <div>
                <h3>Lions</h3>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

  );
}

export default Testimonials;

import React from "react";

import Classes from "../Styles/Footer.module.css";
//import footerLogo from "../assets/footerlogo.jpg";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
        <h3>Our Contact:</h3>
          <p>+254 10154470</p>
          <p>poltensadventures@gmail.com</p>
         
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
        
            <p>
             Poltens Adventures
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox:</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;

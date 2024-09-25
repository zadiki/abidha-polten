import React, { useState } from "react";

import Classes from "../Styles/NavBar.module.css";
import logo2  from "../assets/logo2.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={Classes.Navbar}>   
      <img src={logo2} alt="" style={{width:'10%', height:'10%'}}/>
        <div className={Classes.brand}>
        
          <h1 className={Classes.NavLogo}>
      
            POLTENS TOURS AND TRAVELS
          </h1>

          <div className={Classes.hamburger}>
            {toggle ? (
              <FontAwesomeIcon
                icon={faClose}
                className={Classes.menuIcon}
                onClick={() => setToggle(false)}
              />
            ) : (
              <FontAwesomeIcon
                className={Classes.menuIcon}
                icon={faBars}
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>

        <ul className={toggle ? Classes.open : ""}>
          <li>
            <a href="#hero" className={Classes.active}>
              home
            </a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#recommendation">About Us</a>
          </li>
          <li>
            {/* <a href="#testimonials">testimonials</a> */}
          </li>
        </ul>

        <p ></p>
      </nav>
    </>
  );
}

export default NavBar;

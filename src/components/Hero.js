import React from "react";
import { Link } from "react-router-dom";
import Laptop from "../assets/laptop2.jpg";
import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img src={Laptop} className="heroImage" />

        <div className="heroText">
          <p> SENAM KUDJO HUMADO</p>
          <h1>REACT DEVELOPER</h1>
          <div>
            <Link to={"./projects"} className="heroButton">
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

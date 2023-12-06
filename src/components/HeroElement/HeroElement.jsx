import React from "react";
import "./HeroElement.css";
import dron from "../../assets/images/drone1.jpg";

function HeroElement() {
  return (
    <div className="hero_content">
      <div className="hero_photo--container">
        <img src={dron} alt="drone_photo" />
      </div>
      <div className="hero_content--container">
        <h1>Tytuł</h1>
      </div>
    </div>
  );
}

export default HeroElement;

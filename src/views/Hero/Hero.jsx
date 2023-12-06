import React from "react";
import "./Hero.css";
import HeroElement from "../../components/HeroElement/HeroElement";
import HeroInformation from "../../components/HeroInformation/HeroInformation";
import HeroPhotos from "../../components/HeroPhotos/HeroPhotos";

function Hero() {
  return (
    <div className="hero_wrapper">
      <div className="hero_container">
        <HeroElement />
      </div>
      <HeroPhotos />
      <div className="hero_container">
        <HeroInformation />
      </div>
    </div>
  );
}

export default Hero;

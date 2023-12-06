import React from "react";
import "./HeroInformation.css";
import talk from "../../assets/images/talk.jpg";
import offer from "../../assets/images/offer.jpg";
import drone_operator from "../../assets/images/drone_operator.jpg";

function HeroInformation() {
  const informations = [
    {
      title: "Rozmowa",
      text: " Duis non anim magna esse tempor ad non do enim aute officia nulla. Aliqua eu deserunt labore dolor id tempor dolor reprehenderitincididunt ullamco aliqua aliqua. Culpa reprehenderit tempor aliqua",
      alt: "talk",
      photo: talk,
    },
    {
      title: "Oferta",
      text: " Duis non anim magna esse tempor ad non do enim aute officia nulla. Aliqua eu deserunt labore dolor id tempor dolor reprehenderitincididunt ullamco aliqua aliqua. Culpa reprehenderit tempor aliqua",
      alt: "oferta",
      photo: offer,
    },
    {
      title: "Praca",
      text: " Duis non anim magna esse tempor ad non do enim aute officia nulla. Aliqua eu deserunt labore dolor id tempor dolor reprehenderitincididunt ullamco aliqua aliqua. Culpa reprehenderit tempor aliqua",
      alt: "operator drona",
      photo: drone_operator,
    },
  ];

  return (
    <div className="heroInformation_container">
      {informations.map((info) => {
        return (
          <div className="heroInformation_content">
            <div className="heroInformation_container--img">
              <img src={info.photo} alt={info.alt} />
            </div>
            <div className="heroInformation_container--content">
              <h2>{info.title}</h2>
              <p>{info.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroInformation;

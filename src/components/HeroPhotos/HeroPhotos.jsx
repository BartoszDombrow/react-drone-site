import React from "react";
import "./HeroPhotos.css";
import construction from "../../assets/images/construction.jpg";
import city from "../../assets/images/city.jpg";
import photogrammetry from "../../assets/images/photogrammetry.jpg";
import thermovision from "../../assets/images/termowizja.jpg";

function HeroPhotos() {
  const photos = [
    { img: construction, alt: "Konstrukcja" },
    { img: city, alt: "Miasto" },
    { img: photogrammetry, alt: "Fotogrametria" },
    { img: thermovision, alt: "Termowizja" },
  ];
  return (
    <div className="heroPhotos_container">
      {photos.map((photo) => {
        return (
          <div className="heroPhotos_photo">
            <img src={photo.img} alt={photo.alt} />
          </div>
        );
      })}
    </div>
  );
}

export default HeroPhotos;

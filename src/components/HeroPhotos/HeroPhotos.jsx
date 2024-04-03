import React from "react";
import "./HeroPhotos.css";
import construction from "../../assets/images/construction.jpg";
import city from "../../assets/images/city.jpg";
import photogrammetry from "../../assets/images/photogrammetry.jpg";
import thermovision from "../../assets/images/termowizja.jpg";

function HeroPhotos() {
    const photos = [
        { img: construction, alt: "Konstrukcja", key: "img1" },
        { img: city, alt: "Miasto", key: "img2" },
        { img: photogrammetry, alt: "Fotogrametria", key: "img3" },
        { img: thermovision, alt: "Termowizja", key: "img4" },
    ];
    return (
        <div className="heroPhotos_container">
            {photos.map((photo) => {
                return (
                    <div className="heroPhotos_photo" key={photo.key}>
                        <img src={photo.img} alt={photo.alt} />
                    </div>
                );
            })}
        </div>
    );
}

export default HeroPhotos;

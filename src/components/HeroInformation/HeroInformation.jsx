import React from "react";
import "./HeroInformation.css";
import talk from "../../assets/images/talk.jpg";
import offer from "../../assets/images/offer.jpg";
import drone_operator from "../../assets/images/drone_operator.jpg";
import { useTranslation } from "react-i18next";

function HeroInformation() {
    const { t } = useTranslation();

    const informations = [
        {
            title: "heroInfo.title1",
            text: "heroInfo.text1",
            alt: "talk",
            photo: talk,
            key: "inf1",
        },
        {
            title: "heroInfo.title2",
            text: "heroInfo.text2",
            alt: "oferta",
            photo: offer,
            key: "inf2",
        },
        {
            title: "heroInfo.title3",
            text: "heroInfo.text3",
            alt: "operator drona",
            photo: drone_operator,
            key: "inf3",
        },
    ];

    return (
        <div className="heroInformation_container">
            {informations.map((info) => {
                return (
                    <div className="heroInformation_content" key={info.key}>
                        <div className="heroInformation_container--img">
                            <img src={info.photo} alt={info.alt} />
                        </div>
                        <div className="heroInformation_container--content">
                            <h2>{t(info.title)}</h2>
                            <p>{t(info.text)}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default HeroInformation;

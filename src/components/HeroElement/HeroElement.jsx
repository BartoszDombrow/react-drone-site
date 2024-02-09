import React from "react";
import "./HeroElement.css";
import dron from "../../assets/images/drone1.jpg";
import { useTranslation } from "react-i18next";

function HeroElement() {
    const { t } = useTranslation();
    return (
        <div className="hero_content">
            <div className="hero_photo--container">
                <img src={dron} alt="drone_photo" />
            </div>
            <div className="hero_content--container">
                <h1>{t("hero.title")}</h1>
                <p>{t("hero.description1")}</p>
                <p>{t("hero.description2")}</p>
            </div>
        </div>
    );
}

export default HeroElement;

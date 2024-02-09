import React from "react";
import "./HeroInformation.css";
import talk from "../../assets/images/talk.jpg";
import offer from "../../assets/images/offer.jpg";
import drone_operator from "../../assets/images/drone_operator.jpg";

function HeroInformation() {
    const informations = [
        {
            title: "Rozmowa",
            text: "W pierwszym etapie, skupiamy się na zrozumieniu potrzeb i oczekiwań naszego klienta. Poprzez otwartą i rzetelną rozmowę, staramy się zgłębić wszelkie istotne detale związane z projektem. Naszym celem jest pełne zrozumienie wymagań klienta oraz zapewnienie klarownej komunikacji między wszystkimi zaangażowanymi stronami.",
            alt: "talk",
            photo: talk,
        },
        {
            title: "Oferta",
            text: "Na drugim etapie, przygotowujemy indywidualnie dostosowaną ofertę, która odpowiada specyficznym potrzebom i wymaganiom klienta. Nasze propozycje są kompleksowe i przejrzyste, uwzględniając wszystkie istotne aspekty projektu, w tym zakres prac, koszty, terminy oraz inne kluczowe szczegóły. Dążymy do zapewnienia naszym klientom klarowności oraz uczciwości w zakresie oferowanych usług.",
            alt: "oferta",
            photo: offer,
        },
        {
            title: "Realizacja",
            text: "W trzecim etapie, przechodzimy do właściwej realizacji projektu zgodnie z ustalonymi wcześniej parametrami. Nasz zespół skrupulatnie dba o każdy detal, działając zgodnie z harmonogramem oraz przestrzegając wysokich standardów jakościowych. W trakcie procesu realizacji, utrzymujemy regularny kontakt z klientem, informując o postępach i dokonując ewentualnych dostosowań zgodnie z jego sugestiami. Naszym celem jest pełna satysfakcja klienta oraz osiągnięcie zamierzonych celów projektu.",
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

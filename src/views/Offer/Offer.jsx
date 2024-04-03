import React from "react";
import "./Offer.css";
import { Link } from "react-router-dom";
import { offers } from "../../data/offer";
import { useTranslation } from "react-i18next";

function Offer() {
    const { t } = useTranslation();

    return (
        <div className="offer_wrapper">
            {offers.map((offer) => {
                return (
                    <div className="offer_container" key={offer.id}>
                        <div className="offer_section--top">
                            <div className="offer_image">
                                <img src={offer.image} alt={offer.title} />
                            </div>
                            <div className="offer_section--top_title">
                                <h1>{t(offer.title)}</h1>
                            </div>
                        </div>
                        <div className="offer_section">
                            <p>{t(offer.shortDescription)}</p>
                            <Link className="link" to={`/oferta/${offer.id}`}>
                                {t("readOn")}
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Offer;

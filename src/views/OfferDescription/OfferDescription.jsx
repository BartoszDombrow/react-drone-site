import React from "react";
import { useParams } from "react-router-dom";
import { offers } from "../../data/offer";
import { useTranslation } from "react-i18next";
import "./OfferDescription.css";

function OfferDescription() {
    const { t } = useTranslation();

    const { id } = useParams();
    const page = offers.find((page) => page.id === parseInt(id));

    return (
        <div className="wrapper_oferty">
            <div className="content_wrapper">
                <div className="side_content">
                    <img src={page.image} alt={page.title} />
                </div>
                <div className="side_content">
                    <h2>{t(page.title)}</h2>
                    <p>{t(page.longDescription)}</p>
                </div>
            </div>
        </div>
    );
}

export default OfferDescription;

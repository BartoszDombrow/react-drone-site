import React from "react";
import "./Offer.css";
import { offers } from "../../data/offer";
import { Link } from "react-router-dom";

function Offer() {
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
                <h1>{offer.title}</h1>
              </div>
            </div>
            <div className="offer_section">
              <Link to={`/oferta/${offer.id}`}>Czytaj dalej</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Offer;

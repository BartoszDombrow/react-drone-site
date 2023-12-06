import React from "react";
import { useParams } from "react-router-dom";
import { offers } from "../../data/offer";

function OfferDescription() {
  const { id } = useParams();
  const page = offers.find((page) => page.id === parseInt(id));

  if (!page) {
    return <div>Strona nie istnieje</div>;
  }

  return (
    <div>
      <h2>{page.title}</h2>
      <p>{page.longDescription}</p>
    </div>
  );
}

export default OfferDescription;

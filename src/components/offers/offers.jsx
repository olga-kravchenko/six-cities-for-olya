import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const Offers = ({offers, place}) => {
  const placeCities = place === `cities` ? `tabs__content` : ``;
  return (
    <div className={`${place}__places-list places__list ${placeCities}`}>
      {offers.map((offer, i) => <OfferCard key = {i} offer = {offer}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array,
  place: PropTypes.string
};

export default Offers;

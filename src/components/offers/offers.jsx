import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const Offers = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <OfferCard key = {i} offer = {offer}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array,
};

export default Offers;

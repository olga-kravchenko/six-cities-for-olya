import React, {useState} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const Offers = ({offers, place}) => {
  const [cardHover, setCardMouseOver] = useState({id: ``});
  const placeCities = place === `cities` ? `cities__places-list places__list tabs__content` : `favorites__places`;
  return (
    <div className={placeCities}
      onMouseOver={({target}) => {
        if (target.tagName === `DIV`) {
          return;
        }
        const hoverElementId = target.closest(`article`).id;
        setCardMouseOver({...cardHover, id: hoverElementId});
      }}
    >
      {offers.map((offer, i) => <OfferCard key = {i} offer = {offer} place={place}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array,
  place: PropTypes.string
};

export default Offers;

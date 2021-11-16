import React, {useState} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const Offers = ({offers, pageType}) => {
  const [activeOfferId, setActiveOfferId] = useState({activeOfferId: ``});
  return (
    <div className="cities__places-list places__list tabs__content"
      onMouseOver={({target}) => {
        if (target.tagName === `DIV`) {
          return;
        }
        const hoverElementId = target.closest(`article`).id;
        setActiveOfferId({...activeOfferId, activeOfferId: hoverElementId});
      }}
      onMouseLeave={() => setActiveOfferId({...activeOfferId, activeOfferId: ``})}
    >
      {offers.map((offer, i) => <OfferCard key = {i} offer={offer} pageType={pageType}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired
};

export default Offers;

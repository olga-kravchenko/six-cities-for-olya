import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {changeActiveOffer} from "../../store/actions";
import {useDispatch} from "react-redux";

const Offers = ({offers, pageType}) => {
  const dispatch = useDispatch();
  const onOfferHover = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === `DIV`) {
      return;
    }
    const hoverElementId = evt.target.closest(`article`).id;
    dispatch(changeActiveOffer(hoverElementId));
  };

  const onOfferLeave = (evt) => {
    evt.preventDefault();
    const leaveElementId = ``;
    dispatch(changeActiveOffer(leaveElementId));
  };

  return (
    <div
      className="cities__places-list places__list tabs__content"
      onMouseOver={onOfferHover}
      onMouseLeave={onOfferLeave}
    >
      {offers.map((offer, i) => <OfferCard key={i} offer={offer} pageType={pageType}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default Offers;

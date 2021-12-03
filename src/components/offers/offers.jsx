import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Offers = ({offers, pageType, onOfferHover, onOfferLeave}) => {
  return (
    <div
      className="cities__places-list places__list tabs__content"
      onMouseOver={onOfferHover}
      onMouseLeave={onOfferLeave}
    >
      {offers.map((offer, i) => <OfferCard key = {i} offer={offer} pageType={pageType}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired,
  onOfferHover: PropTypes.func,
  onOfferLeave: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferHover(evt) {
    evt.preventDefault();
    if (evt.target.tagName === `DIV`) {
      return;
    }
    const hoverElementId = evt.target.closest(`article`).id;
    dispatch(ActionCreator.changeActiveOffer(hoverElementId));
  },
  onOfferLeave(evt) {
    evt.preventDefault();
    const leaveElementId = ``;
    dispatch(ActionCreator.changeActiveOffer(leaveElementId));
  },
});

export {Offers};
export default connect(null, mapDispatchToProps)(Offers);

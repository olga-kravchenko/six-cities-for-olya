import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {changeActiveOffer} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {SortingType} from "../../constants";

const getRelevantSortingOffers = (sortingType, filteredOffers) => {
  let sortingCallback = null;
  switch (sortingType) {
    case SortingType.PRICE_LOW_TO_HIGH:
      sortingCallback = (firstOffer, secondOffer) => (firstOffer.price - secondOffer.price);
      break;
    case SortingType.PRICE_HIGH_TO_LOW:
      sortingCallback = (firstOffer, secondOffer) => (secondOffer.price - firstOffer.price);
      break;
    case SortingType.TOP_RATED_FIRST:
      sortingCallback = (firstOffer, secondOffer) => (secondOffer.rating - firstOffer.rating);
      break;
  }
  return sortingCallback ? filteredOffers.sort(sortingCallback) : filteredOffers;
};


const Offers = ({offers, pageType}) => {
  const {sortingType} = useSelector((state) => state.SORTING_TYPE);
  const dispatch = useDispatch();
  const offerList = getRelevantSortingOffers(sortingType, offers);
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
      {offerList.map((offer, i) => <OfferCard key={i} offer={offer} pageType={pageType}/>)}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default Offers;

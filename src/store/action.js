import {sortOffersByRating, sortOffersByPriceLowToHigh, sortOffersByPriceHighToLow} from "../utils/utils";

const ActionType = {
  CHANGE_CITY: `city/cityChange`,
  FILL_WITH_OFFERS: `city/offerFilling`,
  CHANGE_SORTING: `city/sortingChange`,
  HOVER_ON_OFFER: `city/offerHover`,
};

const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillWithOffers: (sortingType = SortingType.POPULAR) => {
    let sortingCallback;
    switch (sortingType) {
      case SortingType.POPULAR:
        sortingCallback = false;
        break;
      case SortingType.PRICE_LOW_TO_HIGH:
        sortingCallback = sortOffersByPriceLowToHigh;
        break;
      case SortingType.PRICE_HIGH_TO_LOW:
        sortingCallback = sortOffersByPriceHighToLow;
        break;
      case SortingType.TOP_RATED_FIRST:
        sortingCallback = sortOffersByRating;
        break;
    }
    return ({
      type: ActionType.FILL_WITH_OFFERS,
      payload: sortingCallback
    });
  },
  changeSorting: (sortingType = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortingType,
  }),
  hoverOnOffer: (offerId = ``) => ({
    type: ActionType.HOVER_ON_OFFER,
    payload: offerId,
  }),
};

export {ActionType, SortingType, ActionCreator};

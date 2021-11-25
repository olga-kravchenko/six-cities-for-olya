import {sortOffersByRating, sortOffersByPriceLowToHigh, sortOffersByPriceHighToLow} from "../utils/utils";
import {SortingType} from "../constants";

const ActionType = {
  CHANGE_CITY: `city/cityChange`,
  FILL_WITH_OFFERS: `city/offerFilling`,
  CHANGE_SORTING_TYPE: `city/changeSortingType`,
  HOVER_ON_OFFER: `city/offerHover`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillWithOffers: (sortingType = SortingType.POPULAR) => {
    let sortingTypeCallback;
    switch (sortingType) {
      case SortingType.POPULAR:
        sortingTypeCallback = false;
        break;
      case SortingType.PRICE_LOW_TO_HIGH:
        sortingTypeCallback = sortOffersByPriceLowToHigh;
        break;
      case SortingType.PRICE_HIGH_TO_LOW:
        sortingTypeCallback = sortOffersByPriceHighToLow;
        break;
      case SortingType.TOP_RATED_FIRST:
        sortingTypeCallback = sortOffersByRating;
        break;
    }
    return ({
      type: ActionType.FILL_WITH_OFFERS,
      payload: sortingTypeCallback
    });
  },
  changeSortingType: (sortingType = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType,
  }),
  hoverOnOffer: (offerId = ``) => ({
    type: ActionType.HOVER_ON_OFFER,
    payload: offerId,
  }),
};

export {ActionType, ActionCreator};

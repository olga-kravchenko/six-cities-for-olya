import {sortOffersByRating, sortOffersByPriceLowToHigh, sortOffersByPriceHighToLow} from "../utils/utils";
import {SortingType} from "../constants";

const ActionType = {
  CHANGE_CITY: `city/cityChange`,
  CHANGE_SORTING_TYPE: `city/changeSortingType`,
  OPEN_POPUP: `city/openPopup`,
  RESET_CITY: `city/resetCity`,
  RESET_SORTING_TYPE: `city/resetSortingType`,
  HOVER_ON_OFFER: `city/offerHover`,
  FILL_WITH_OFFERS: `city/offerFilling`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortingType: (sortingType = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType,
  }),
  openPopup: () => ({
    type: ActionType.OPEN_POPUP,
  }),

  resetSortingType: () => ({
    type: ActionType.RESET_SORTING_TYPE,
  }),

  resetCity: () => ({
    type: ActionType.RESET_CITY,
  }),

  hoverOnOffer: (offerId = ``) => ({
    type: ActionType.HOVER_ON_OFFER,
    payload: offerId,
  }),
  fillWithOffers: (sortingType) => {
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
};

export {ActionType, ActionCreator};

import {sortOffersByRating, sortOffersByPriceLowToHigh, sortOffersByPriceHighToLow} from "../utils/utils";
export const ActionType = {
  CHANGE_CITY: `city/cityChange`,
  OFFER_FILLING: `city/offerFilling`,
  CHANGE_SORTING: `city/sortingChange`,
};

export const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  offerFilling: (sortingType = SortingType.POPULAR) => {
    let sortingCallBack;

    switch (sortingType) {
      case SortingType.POPULAR:
        sortingCallBack = false;
        break;
      case SortingType.PRICE_LOW_TO_HIGH:
        sortingCallBack = sortOffersByPriceLowToHigh;
        break;
      case SortingType.PRICE_HIGH_TO_LOW:
        sortingCallBack = sortOffersByPriceHighToLow;
        break;
      case SortingType.TOP_RATED_FIRST:
        sortingCallBack = sortOffersByRating;
        break;
    }

    return ({
      type: ActionType.OFFER_FILLING,
      payload: sortingCallBack
    });
  },
  changeSorting: (type = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING,
    payload: type,
  }),
};

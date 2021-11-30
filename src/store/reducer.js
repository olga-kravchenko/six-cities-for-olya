import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE, DEFAULT_STATE, SortingType, AuthorizationStatus} from "../constants";
import {sortOffersByPriceHighToLow, sortOffersByPriceLowToHigh, sortOffersByRating} from "../utils/utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offers,
  city: DEFAULT_CITY,
  offerList: offers.filter((e) => e.city.name === DEFAULT_CITY),
  sortingType: DEFAULT_SORTING_TYPE,
  activeOfferId: ``,
  isOpenSortingPopup: DEFAULT_STATE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload, isOpenSortingPopup: DEFAULT_STATE};
    case ActionType.RESET_CITY:
      return {...state, city: DEFAULT_CITY};
    case ActionType.CHANGE_SORTING_TYPE:
      return {...state, sortingType: action.payload, isOpenSortingPopup: false};
    case ActionType.RESET_SORTING_TYPE:
      return {...state, sortingType: DEFAULT_SORTING_TYPE, isOpenSortingPopup: DEFAULT_STATE};
    case ActionType.OPEN_POPUP:
      return {...state, isOpenSortingPopup: !state.isOpenSortingPopup};
    case ActionType.CHANGE_ACTIVE_OFFER:
      return {...state, activeOfferId: action.payload};
    case ActionType.FIND_RELEVANT_OFFERS:
      let callback;
      switch (state.sortingType) {
        case SortingType.POPULAR:
          callback = false;
          break;
        case SortingType.PRICE_LOW_TO_HIGH:
          callback = sortOffersByPriceLowToHigh;
          break;
        case SortingType.PRICE_HIGH_TO_LOW:
          callback = sortOffersByPriceHighToLow;
          break;
        case SortingType.TOP_RATED_FIRST:
          callback = sortOffersByRating;
          break;
      }
      return {
        ...state, offerList: callback ?
          [...offers.filter((e) => e.city.name === state.city)].sort(callback) :
          offers.filter((e) => e.city.name === state.city)
      };
    default:
      return state;
  }
};

export {reducer};

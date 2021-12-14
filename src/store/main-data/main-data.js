import {ActionType} from "../actions";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE} from "../../constants";

const initialState = {
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORTING_TYPE,
  isOpenSortingPopup: false,
  activeOfferId: ``,
  offers: [],
  isOffersLoaded: false,
};

const mainDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: payload, isOpenSortingPopup: false};
    case ActionType.CHANGE_SORTING_TYPE:
      return {...state, sortingType: payload, isOpenSortingPopup: false};
    case ActionType.RESET_SORTING_TYPE:
      return {...state, sortingType: DEFAULT_SORTING_TYPE, isOpenSortingPopup: false};
    case ActionType.OPEN_POPUP:
      return {...state, isOpenSortingPopup: !state.isOpenSortingPopup};
    case ActionType.CHANGE_ACTIVE_OFFER:
      return {...state, activeOfferId: payload};
    case ActionType.LOAD_OFFERS:
      return {...state, offers: payload, isOffersLoaded: true};
    default:
      return state;
  }
};

export {mainDataReducer};

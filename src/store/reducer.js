import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE, DEFAULT_STATE} from "../constants";

const initialState = {
  offers,
  city: DEFAULT_CITY,
  offerList: offers.filter((e) => e.city.name === DEFAULT_CITY),
  sortingType: DEFAULT_SORTING_TYPE,
  activeOfferId: ``,
  isOpenSortingPopup: DEFAULT_STATE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload, isOpenSortingPopup: DEFAULT_STATE};

    case ActionType.RESET_SORTING_TYPE:
      return {...state, sortingType: DEFAULT_SORTING_TYPE, isOpenSortingPopup: DEFAULT_STATE};

    case ActionType.FILL_WITH_OFFERS:
      return {
        ...state, offerList: action.payload ?
          [...offers.filter((e) => e.city.name === state.city)].sort(action.payload) :
          offers.filter((e) => e.city.name === state.city)
      };

    case ActionType.CHANGE_SORTING_TYPE:
      return {...state, sortingType: action.payload, isOpenSortingPopup: false};

    case ActionType.HOVER_ON_OFFER:
      return {...state, activeOfferId: action.payload};


    case ActionType.OPEN_POPUP:
      return {...state, isOpenSortingPopup: !state.isOpenSortingPopup};

    default:
      return state;
  }
};

export {reducer};

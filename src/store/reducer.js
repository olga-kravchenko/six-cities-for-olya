import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {SortingType, DEFULT_CITY} from "../constants";

const initialState = {
  city: DEFULT_CITY,
  offers,
  offerList: offers.filter((e) => e.city.name === DEFULT_CITY),
  sortingType: SortingType.POPULAR,
  activeOfferId: ``,
  isOpenSortingPopup: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload, isOpenSortingPopup: false};

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

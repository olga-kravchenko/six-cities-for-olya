import {ActionType} from "./action";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE, DEFAULT_STATE, AuthorizationStatus} from "../constants";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offers: [],
  city: DEFAULT_CITY,
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
    case ActionType.CHANGE_SORTING_TYPE:
      return {...state, sortingType: action.payload, isOpenSortingPopup: false};
    case ActionType.RESET_SORTING_TYPE:
      return {...state, sortingType: DEFAULT_SORTING_TYPE, isOpenSortingPopup: DEFAULT_STATE};
    case ActionType.OPEN_POPUP:
      return {...state, isOpenSortingPopup: !state.isOpenSortingPopup};
    case ActionType.CHANGE_ACTIVE_OFFER:
      return {...state, activeOfferId: action.payload};
    default:
      return state;
  }
};

export {reducer};

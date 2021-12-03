import {ActionType} from "./action";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE, DEFAULT_STATE, AuthorizationStatus} from "../constants";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offers: [],
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORTING_TYPE,
  activeOfferId: ``,
  isOpenSortingPopup: DEFAULT_STATE,
  isDataLoaded: false,
  isOfferLoaded: false,
  chosenOffer: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
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
    case ActionType.CHOSE_OFFER:
      return {...state, chosenOffer: action.payload, isOfferLoaded: true};
    case ActionType.RESET_OFFER:
      return {...state, chosenOffer: {}, isOfferLoaded: false};
    default:
      return state;
  }
};

export {reducer};

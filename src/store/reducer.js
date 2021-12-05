import {ActionType} from "./actions";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE} from "../constants";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  authorizationStatus: false,
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORTING_TYPE,
  isOpenSortingPopup: false,
  activeOfferId: ``,
  offers: [],
  offer: {},
  comments: [],
  nearestOffers: [],
  favoriteOffers: [],
  isOffersLoaded: false,
  isOfferLoaded: false,
  isCommentsLoaded: false,
  isNearbyOffersLoaded: false,
  isFavoritesLoaded: false,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SAVE_USER_INFO:
      return {...state, userInfo: payload};
    case ActionType.CHANGE_AUTHORIZATION:
      return {...state, authorizationStatus: payload};
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
    case ActionType.LOAD_OFFER:
      return {...state, offer: payload, isOfferLoaded: true};
    case ActionType.LOAD_COMMENTS:
      return {...state, comments: payload, isCommentsLoaded: true};
    case ActionType.LOAD_NEAREST_OFFERS:
      return {...state, nearestOffers: payload, isNearbyOffersLoaded: true};
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {...state, favoriteOffers: payload, isFavoritesLoaded: true};
    case ActionType.RESET_OFFER:
      return {
        ...state,
        chosenOffer: {},
        isOfferLoaded: false,
        nearByOffers: [],
        isNearbyOffersLoaded: false,
        isFavoritesLoaded: false,
        isCommentsLoaded: false
      };
    default:
      return state;
  }
};

export {reducer};

import {ActionType} from "./actions";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE, DEFAULT_STATE, AuthorizationStatus} from "../constants";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORTING_TYPE,
  isOpenSortingPopup: DEFAULT_STATE,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_USER_INFO:
      return {...state, userInfo: action.payload};
    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload};
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
    case ActionType.LOAD_OFFERS:
      return {...state, offers: action.payload, isOffersLoaded: true};
    case ActionType.LOAD_OFFER:
      return {...state, offer: action.payload, isOfferLoaded: true};
    case ActionType.LOAD_COMMENTS:
      return {...state, comments: action.payload, isCommentsLoaded: true};
    case ActionType.LOAD_NEAREST_OFFERS:
      return {...state, nearestOffers: action.payload, isNearbyOffersLoaded: true};
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {...state, favoriteOffers: action.payload, isFavoritesLoaded: true};
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

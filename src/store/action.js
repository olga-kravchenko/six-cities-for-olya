import {SortingType} from "../constants";

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `main/loadOffers`,
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING_TYPE: `main/changeSortingType`,
  RESET_SORTING_TYPE: `main/resetSortingType`,
  OPEN_POPUP: `main/openPopup`,
  CHANGE_ACTIVE_OFFER: `offer/changeActiveOffer`,
  LOAD_OFFER: `offer/loadOffer`,
  RESET_OFFER: `offer/resetOffer`,
  LOAD_NEAREST_OFFERS: `offer/loadNearestOffers`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
};

const ActionCreator = {
  saveUserInfo: (info) => ({
    type: ActionType.SAVE_USER_INFO,
    payload: info,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortingType: (sortingType = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType,
  }),
  resetSortingType: () => ({
    type: ActionType.RESET_SORTING_TYPE,
  }),
  openPopup: () => ({
    type: ActionType.OPEN_POPUP,
  }),
  changeActiveOffer: (offerId = ``) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offerId,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadNearestOffers: (offers) => ({
    type: ActionType.LOAD_NEAREST_OFFERS,
    payload: offers,
  }),
  resetOffer: () => ({
    type: ActionType.RESET_OFFER,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export {ActionType, ActionCreator};

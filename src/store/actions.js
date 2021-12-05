import {SortingType} from "../constants";

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  REQUIRED_AUTHORIZATION: `user/changeAuthStatus`,
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING_TYPE: `main/changeSortingType`,
  OPEN_POPUP: `main/openPopup`,
  RESET_SORTING_TYPE: `main/resetSortingType`,
  CHANGE_ACTIVE_OFFER: `offer/changeActiveOffer`,
  LOAD_OFFERS: `main/loadOffers`,
  LOAD_OFFER: `offer/loadOffer`,
  LOAD_COMMENTS: `offer/loadComments`,
  LOAD_NEAREST_OFFERS: `offer/loadNearestOffers`,
  LOAD_FAVORITE_OFFERS: `offer/loadFavoriteOffers`,
  RESET_OFFER: `offer/resetOffer`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
};

const ActionCreator = {
  saveUserInfo: (info) => ({
    type: ActionType.SAVE_USER_INFO,
    payload: info,
  }),
  changeAuthStatus: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortingType: (sortingType = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType,
  }),
  openPopup: () => ({
    type: ActionType.OPEN_POPUP,
  }),
  resetSortingType: () => ({
    type: ActionType.RESET_SORTING_TYPE,
  }),
  changeActiveOffer: (offerId = ``) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offerId,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  loadNearestOffers: (offers) => ({
    type: ActionType.LOAD_NEAREST_OFFERS,
    payload: offers,
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
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

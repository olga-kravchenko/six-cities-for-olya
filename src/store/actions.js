import {SortingType} from "../constants";

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  CHANGE_AUTH: `user/changeAuthStatus`,
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING_TYPE: `main/changeSortingType`,
  OPEN_POPUP: `main/openPopup`,
  RESET_SORTING_TYPE: `main/resetSortingType`,
  LOAD_OFFERS: `main/loadOffers`,
  CHANGE_ACTIVE_OFFER: `offer/changeActiveOffer`,
  LOAD_OFFER: `offer/loadOffer`,
  LOAD_COMMENTS: `offer/loadComments`,
  LOAD_NEAREST_OFFERS: `offer/loadNearestOffers`,
  LOAD_FAVORITE_OFFERS: `favorites/loadFavoriteOffers`,
  RESET_FAVORITES: `favorites/resetFavorite`,
  REDIRECT_TO_ROUTE: `redirect/redirectToRoute`,
};

const ActionCreator = {
  saveUserInfo: (info) => ({
    type: ActionType.SAVE_USER_INFO,
    payload: info,
  }),
  changeAuthStatus: (status) => ({
    type: ActionType.CHANGE_AUTH,
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
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  resetFavorite: () => ({
    type: ActionType.RESET_FAVORITES,
  }),
};

export {ActionType, ActionCreator};

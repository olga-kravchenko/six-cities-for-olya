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


const saveUserInfo = (info) => ({
  type: ActionType.SAVE_USER_INFO,
  payload: info,
});

const changeAuthStatus = (status) => ({
  type: ActionType.CHANGE_AUTH,
  payload: status,
});

const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

const changeSortingType = (sortingType = SortingType.POPULAR) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType,
});

const openPopup = () => ({
  type: ActionType.OPEN_POPUP,
});

const resetSortingType = () => ({
  type: ActionType.RESET_SORTING_TYPE,
});

const changeActiveOffer = (offerId = ``) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER,
  payload: offerId,
});

const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

const loadNearestOffers = (offers) => ({
  type: ActionType.LOAD_NEAREST_OFFERS,
  payload: offers,
});

const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const resetFavorite = () => ({
  type: ActionType.RESET_FAVORITES,
});

export {
  ActionType,
  saveUserInfo,
  changeAuthStatus,
  changeCity,
  changeSortingType,
  openPopup,
  resetSortingType,
  changeActiveOffer,
  loadOffers,
  loadOffer,
  loadComments,
  loadNearestOffers,
  loadFavoriteOffers,
  redirectToRoute,
  resetFavorite
};

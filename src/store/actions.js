import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  CHANGE_AUTH: `user/changeAuthStatus`,
  CHANGE_CITY: `city/changeCity`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFERS_WITH_ERROR: `offers/loadOffersWithError`,
  CHANGE_SORTING_TYPE: `sortingType/changeSortingType`,
  RESET_SORTING_TYPE: `sortingType/resetSortingType`,
  OPEN_POPUP: `popup/openPopup`,
  CLOSE_POPUP: `popup/closePopup`,
  CHANGE_ACTIVE_OFFER: `activeOffer/changeActiveOffer`,
  LOAD_OFFER: `offer/loadOffer`,
  UPDATE_OFFERS: `offer/updateOffers`,
  LOAD_COMMENTS: `offer/loadComments`,
  LOAD_NEAREST_OFFERS: `offer/loadNearestOffers`,
  LOAD_FAVORITE_OFFERS: `favorites/loadFavoriteOffers`,
  UPDATE_FAVORITE_OFFERS: `favorites/updateFavoriteOffers`,
  RESET_FAVORITES: `favorites/resetFavorite`,
  REDIRECT_TO_ROUTE: `redirect/redirectToRoute`,
};

const saveUserInfo = createAction(ActionType.SAVE_USER_INFO);
const changeAuthStatus = createAction(ActionType.CHANGE_AUTH);

const changeCity = createAction(ActionType.CHANGE_CITY);
const loadOffers = createAction(ActionType.LOAD_OFFERS);
const updateOffers = createAction(ActionType.UPDATE_OFFERS);
const loadOffersWithError = createAction(ActionType.LOAD_OFFERS_WITH_ERROR);
const changeSortingType = createAction(ActionType.CHANGE_SORTING_TYPE);
const resetSortingType = createAction(ActionType.RESET_SORTING_TYPE);
const openPopup = createAction(ActionType.OPEN_POPUP);
const closePopup = createAction(ActionType.CLOSE_POPUP);
const changeActiveOffer = createAction(ActionType.CHANGE_ACTIVE_OFFER);

const loadOffer = createAction(ActionType.LOAD_OFFER);
const loadComments = createAction(ActionType.LOAD_COMMENTS);
const loadNearestOffers = createAction(ActionType.LOAD_NEAREST_OFFERS);

const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS);
const updateFavoritesOffers = createAction(ActionType.UPDATE_FAVORITE_OFFERS);
const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);

export {
  ActionType,
  saveUserInfo,
  changeAuthStatus,
  changeCity,
  loadOffers,
  updateOffers,
  loadOffersWithError,
  changeSortingType,
  resetSortingType,
  openPopup,
  closePopup,
  changeActiveOffer,
  loadOffer,
  loadComments,
  loadNearestOffers,
  loadFavoriteOffers,
  updateFavoritesOffers,
  redirectToRoute
};

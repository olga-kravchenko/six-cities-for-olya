import {SortingType} from "../constants";
import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  CHANGE_AUTH: `user/changeAuthStatus`,
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING_TYPE: `main/changeSortingType`,
  OPEN_POPUP: `main/openPopup`,
  CLOSE_POPUP: `main/closePopup`,
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

const saveUserInfo = createAction(ActionType.SAVE_USER_INFO, (info) => {
  return {
    payload: info
  };
});

const changeAuthStatus = createAction(ActionType.CHANGE_AUTH, (status) => {
  return {
    payload: status,
  };
});

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => {
  return {
    payload: city,
  };
});

const changeSortingType = createAction(ActionType.CHANGE_SORTING_TYPE, (sortingType = SortingType.POPULAR) => {
  return {
    payload: sortingType,
  };
});

const openPopup = createAction(ActionType.OPEN_POPUP);
const closePopup = createAction(ActionType.CLOSE_POPUP);
const resetSortingType = createAction(ActionType.RESET_SORTING_TYPE);
const resetFavorite = createAction(ActionType.RESET_FAVORITES);

const changeActiveOffer = createAction(ActionType.CHANGE_ACTIVE_OFFER, (offerId = ``) => {
  return {
    payload: offerId,
  };
});

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => {
  return {
    payload: offer,
  };
});

const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments,
  };
});

const loadNearestOffers = createAction(ActionType.LOAD_NEAREST_OFFERS, (offers) => {
  return {
    payload: offers,
  };
});

const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (offers) => {
  return {
    payload: offers,
  };
});

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export {
  ActionType,
  saveUserInfo,
  changeAuthStatus,
  changeCity,
  changeSortingType,
  openPopup,
  closePopup,
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

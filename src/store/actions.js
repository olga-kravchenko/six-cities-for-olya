import {SortingType} from "../constants";
import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  CHANGE_AUTH: `user/changeAuthStatus`,
  CHANGE_CITY: `city/changeCity`,
  LOAD_OFFERS: `offers/loadOffers`,
  CHANGE_SORTING_TYPE: `sortingType/changeSortingType`,
  RESET_SORTING_TYPE: `sortingType/resetSortingType`,
  OPEN_POPUP: `popup/openPopup`,
  CLOSE_POPUP: `popup/closePopup`,
  CHANGE_ACTIVE_OFFER: `activeOffer/changeActiveOffer`,
  LOAD_OFFER: `offer/loadOffer`,
  LOAD_COMMENTS: `offer/loadComments`,
  LOAD_NEAREST_OFFERS: `offer/loadNearestOffers`,
  LOAD_FAVORITE_OFFERS: `favorites/loadFavoriteOffers`,
  RESET_FAVORITES: `favorites/resetFavorite`,
  REDIRECT_TO_ROUTE: `redirect/redirectToRoute`,
};

const saveUserInfo = createAction(ActionType.SAVE_USER_INFO, (info) => ({payload: info}));
const changeAuthStatus = createAction(ActionType.CHANGE_AUTH, (status) => ({payload: status}));
const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({payload: offers}));
const changeSortingType = createAction(ActionType.CHANGE_SORTING_TYPE, (sortingType = SortingType.POPULAR) => ({payload: sortingType}));
const resetSortingType = createAction(ActionType.RESET_SORTING_TYPE);
const openPopup = createAction(ActionType.OPEN_POPUP);
const closePopup = createAction(ActionType.CLOSE_POPUP);
const changeActiveOffer = createAction(ActionType.CHANGE_ACTIVE_OFFER, (offerId = ``) => ({payload: offerId}));
const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({payload: offer}));
const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({payload: comments}));
const loadNearestOffers = createAction(ActionType.LOAD_NEAREST_OFFERS, (offers) => ({payload: offers}));
const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (offers) => ({payload: offers}));
const resetFavorite = createAction(ActionType.RESET_FAVORITES);
const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));

export {
  ActionType,
  saveUserInfo,
  changeAuthStatus,
  changeCity,
  loadOffers,
  changeSortingType,
  resetSortingType,
  openPopup,
  closePopup,
  changeActiveOffer,
  loadOffer,
  loadComments,
  loadNearestOffers,
  loadFavoriteOffers,
  resetFavorite,
  redirectToRoute
};

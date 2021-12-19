import {createAction} from '@reduxjs/toolkit';

const saveUserInfo = createAction(`user/saveUserInfo`);
const changeAuthStatus = createAction(`user/changeAuthStatus`);

const changeCity = createAction(`city/changeCity`);
const loadOffers = createAction(`offers/loadOffers`);
const updateOffers = createAction(`offers/updateOffers`);
const loadOffersWithError = createAction(`offers/loadOffersWithError`);
const changeSortingType = createAction(`sortingType/changeSortingType`);
const resetSortingType = createAction(`sortingType/resetSortingType`);
const openPopup = createAction(`popup/openPopup`);
const closePopup = createAction(`popup/closePopup`);
const changeActiveOffer = createAction(`activeOffer/changeActiveOffer`);

const loadOffer = createAction(`offer/loadOffer`);
const loadComments = createAction(`offer/loadComments`);
const loadNearestOffers = createAction(`offer/loadNearestOffers`);

const loadFavoriteOffers = createAction(`favorites/loadFavoriteOffers`);
const updateFavoritesOffers = createAction(`favorites/updateFavoritesOffers`);
const redirectToRoute = createAction(`redirect/redirectToRoute`);

export {
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

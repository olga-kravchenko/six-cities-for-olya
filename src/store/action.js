import {SortingType} from "../constants";

const ActionType = {
  SAVE_USER_INFO: `user/saveUserInfo`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `city/loadOffers`,
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORTING_TYPE: `city/changeSortingType`,
  RESET_SORTING_TYPE: `city/resetSortingType`,
  OPEN_POPUP: `city/openPopup`,
  CHANGE_ACTIVE_OFFER: `city/changeActiveOffer`,
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
};

export {ActionType, ActionCreator};

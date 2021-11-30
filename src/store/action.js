import {SortingType} from "../constants";

const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_CITY: `city/changeCity`,
  RESET_CITY: `city/resetCity`,
  CHANGE_SORTING_TYPE: `city/changeSortingType`,
  RESET_SORTING_TYPE: `city/resetSortingType`,
  OPEN_POPUP: `city/openPopup`,
  CHANGE_ACTIVE_OFFER: `city/changeActiveOffer`,
  FIND_RELEVANT_OFFERS: `city/findRelevantOffers`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  resetCity: () => ({
    type: ActionType.RESET_CITY,
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
  findRelevantOffers: () => {
    return ({
      type: ActionType.FIND_RELEVANT_OFFERS,
    });
  },
};

export {ActionType, ActionCreator};

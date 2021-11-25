import {SortingType} from "../constants";

const ActionType = {
  CHANGE_CITY: `city/cityChange`,
  CHANGE_SORTING_TYPE: `city/changeSortingType`,
  OPEN_POPUP: `city/openPopup`,
  RESET_CITY: `city/resetCity`,
  RESET_SORTING_TYPE: `city/resetSortingType`,
  CHANGE_ACTIVE_OFFER: `city/changeActiveOffer`,
  FILL_WITH_OFFERS: `city/offerFilling`,
};

const ActionCreator = {
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

  resetCity: () => ({
    type: ActionType.RESET_CITY,
  }),

  changeActiveOffer: (offerId = ``) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offerId,
  }),

  findRelevantOffers: () => {
    return ({
      type: ActionType.FILL_WITH_OFFERS,
    });
  },
};

export {ActionType, ActionCreator};

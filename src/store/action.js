export const ActionType = {
  CHANGE_SORTING: `city/sortingChange`,
  CHANGE_CITY: `city/cityChange`,
  OFFER_FILLING: `city/offerFilling`,
};

export const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const ActionCreator = {
  changeSorting: (type = SortingType.POPULAR) => ({
    type: ActionType.CHANGE_SORTING,
    payload: type,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  offerFilling: (city) => {
    return ({
      type: ActionType.OFFER_FILLING,
      payload: city,
    });
  }
};

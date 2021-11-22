export const ActionType = {
  CHANGE_SORTING: `city/sortingChange`,
  CHANGE_CITY: `city/cityChange`,
  OFFER_FILLING: `city/offerFilling`,
};

export const ActionCreator = {
  changeSorting: (type) => ({
    type: ActionType.CHANGE_SORTING,
    payload: type,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  offerFilling: (city) => ({
    type: ActionType.OFFER_FILLING,
    payload: city,
  })
};

export const ActionType = {
  CITY_CHANGE: `city/cityChange`,
  OFFER_FILLING: `city/offerFilling`,
};

export const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
  offerFilling: (city) => ({
    type: ActionType.OFFER_FILLING,
    payload: city,
  })
};

export const ActionType = {
  CHANGE_CITY: `city/cityChange`,
  OFFER_FILLING: `city/offerFilling`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  offerFilling: () => {
    return ({
      type: ActionType.OFFER_FILLING,
    });
  }
};

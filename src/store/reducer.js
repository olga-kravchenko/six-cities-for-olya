import {ActionType} from "./action";
import {generateOffer} from "../mocks/offers";

const OFFER_QUANTITY = 5;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);

const initialState = {
  city: {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`,
  },
  offerList: [...offers].filter((e) => e.city.name === `Amsterdam`),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {...state, city: state.city + action.payload};

    case ActionType.OFFER_FILLING:
      return {...state, offerList: state.offerList + action.payload};
  }
  return state;
};

export {reducer};

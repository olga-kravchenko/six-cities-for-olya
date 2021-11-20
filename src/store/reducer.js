import {generateOffer} from "../mocks/offers";

const OFFER_QUANTITY = 5;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);

const initialState = {
  cities: {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`,
  },
  offerList: offers,
};

const reducer = (state = initialState, action) => {
  return state;
};

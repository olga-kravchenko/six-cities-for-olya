import {ActionType} from "./action";
import {generateOffer} from "../mocks/offers";

const OFFER_QUANTITY = 15;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);
const offersParis = [...offers].filter((e) => e.city.name === `Paris`);
const offersCologne = [...offers].filter((e) => e.city.name === `Cologne`);

const initialState = {
  city: `Paris`,
  offerList: offers.filter((e) => e.city.name === `Paris`),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {...state, city: action.payload};

    case ActionType.OFFER_FILLING:
      return {...state, offerList: offers.filter((e) => e.city.name === action.payload)};

    default:
      return state;
  }
};

export {reducer};

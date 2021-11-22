import {ActionType} from "./action";
import {offers} from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offerList: offers.filter((e) => e.city.name === `Paris`)
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

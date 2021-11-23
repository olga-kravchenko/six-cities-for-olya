import {ActionType} from "./action";
import {offers} from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offers,
  offerList: offers.filter((e) => e.city.name === `Paris`),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload};

    case ActionType.OFFER_FILLING:
      return {...state, offerList: offers.filter((e) => e.city.name === state.city)};

    default:
      return state;
  }
};

export {reducer};

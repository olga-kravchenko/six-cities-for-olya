import {ActionType} from "./action";
import {offers} from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offerList: offers.filter((e) => e.city.name === `Paris`),
  sorting: `popular`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload};

    case ActionType.OFFER_FILLING:
      return {...state, offerList: offers.filter((e) => e.city.name === action.payload)};

    case ActionType.CHANGE_SORTING:
      return {...state, sorting: action.payload};

    default:
      return state;
  }
};

export {reducer};

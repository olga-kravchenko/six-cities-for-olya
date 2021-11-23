import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {SortingType} from "./action";

const initialState = {
  city: `Paris`,
  offers,
  offerList: offers.filter((e) => e.city.name === `Paris`),
  sorting: SortingType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {...state, city: action.payload};

    case ActionType.OFFER_FILLING:
      return {
        ...state, offerList: action.payload ?
          offers.filter((e) => e.city.name === state.city).slice().sort(action.payload) :
          offers.filter((e) => e.city.name === state.city)
      };

    case ActionType.CHANGE_SORTING:
      return {...state, sorting: action.payload};
    default:
      return state;
  }
};

export {reducer};

import {ActionType} from "../actions";

const initialState = {
  offer: {},
  comments: [],
  nearestOffers: [],
};

const offerDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.LOAD_OFFER:
      return {...state, offer: payload};
    case ActionType.LOAD_COMMENTS:
      return {...state, comments: payload};
    case ActionType.LOAD_NEAREST_OFFERS:
      return {...state, nearestOffers: payload};
    default:
      return state;
  }
};

export {offerDataReducer};

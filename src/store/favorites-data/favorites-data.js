import {ActionType} from "../actions";

const initialState = {
  favoriteOffers: [],
  isFavoritesLoaded: false,
};

const favoritesDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.LOAD_FAVORITE_OFFERS:
      return {...state, favoriteOffers: payload, isFavoritesLoaded: true};
    case ActionType.RESET_FAVORITES:
      return {
        ...state,
        isFavoritesLoaded: false,
      };
    default:
      return state;
  }
};

export {favoritesDataReducer};

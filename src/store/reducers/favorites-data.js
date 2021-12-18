import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers} from "../actions";

const initialState = {
  favoriteOffers: [],
  isFavoritesLoaded: false,
};

const favoritesDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteOffers, (state, {payload}) => {
    state.favoriteOffers = payload;
    state.isFavoritesLoaded = true;
  });
});

export {favoritesDataReducer};

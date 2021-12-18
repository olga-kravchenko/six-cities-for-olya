import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers} from "../actions";

const initialState = {
  favoriteOffers: [],
  isFavoritesLoaded: false,
};

const favoritesDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoritesLoaded = true;
  });
});

export {favoritesDataReducer};

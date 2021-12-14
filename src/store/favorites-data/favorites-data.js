import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers, resetFavorite} from "../actions";

const initialState = {
  favoriteOffers: [],
  isFavoritesLoaded: false,
};

const favoritesDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoritesLoaded = true;
  });
  builder.addCase(resetFavorite, (state) => {
    state.isFavoritesLoaded = false;
  });
});

export {favoritesDataReducer};

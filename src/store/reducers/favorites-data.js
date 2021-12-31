import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers, updateFavoritesOffers} from "../actions/actions";
import {addElement, removeElement} from "../../utils/utils";

const initialState = {
  favoriteOffers: [],
  isFavoritesLoaded: false,
};

const favoritesData = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteOffers, (state, {payload}) => {
    state.favoriteOffers = payload;
    state.isFavoritesLoaded = true;
  });
  builder.addCase(updateFavoritesOffers, (state, {payload}) => {
    if (payload.is_favorite) {
      state.favoriteOffers = addElement(state.favoriteOffers, payload);
    } else {
      state.favoriteOffers = removeElement(state.favoriteOffers, payload);
    }
  });
});

export {initialState, favoritesData};

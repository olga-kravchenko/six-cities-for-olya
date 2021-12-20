import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers, updateFavoritesOffers} from "../actions";

const initialState = {
  favoriteOffers: [],
  isFavoritesLoaded: false,
};

const addElement = (offers, element) => {
  offers.push(element);
  return offers;
};

const removeElement = (offers, element) => {
  const index = offers.findIndex((offer) => offer.id === element.id);
  if (index > -1) {
    offers.splice(index, 1);
  }
  return offers;
};

const favoritesDataReducer = createReducer(initialState, (builder) => {
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

export {favoritesDataReducer};

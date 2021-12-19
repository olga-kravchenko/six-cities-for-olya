import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, updateOffers, loadOffersWithError} from "../actions";

const initialState = {
  offers: [],
  isOffersLoaded: false,
};

const replaceElement = (offers, element) => {
  const index = offers.findIndex((offer) => offer.id === element.id);
  if (index !== -1) {
    offers[index] = element;
  }
  return offers;
};

const offersDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, {payload}) => {
    state.offers = payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(updateOffers, (state, {payload}) => {
    state.offers = replaceElement(state.offers, payload);
  });
  builder.addCase(loadOffersWithError, (state) => {
    state.isOffersLoaded = true;
  });
});

export {offersDataReducer};

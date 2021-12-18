import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, updateOffers, loadOffersWithError} from "../actions";

const initialState = {
  offers: [],
  isOffersLoaded: false,
};

const offersDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, {payload}) => {
    state.offers = payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(updateOffers, (state, {payload}) => {
    state.offers = payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(loadOffersWithError, (state) => {
    state.isOffersLoaded = true;
  });
});

export {offersDataReducer};

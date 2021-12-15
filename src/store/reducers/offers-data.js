import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadOffersWithError} from "../actions";

const initialState = {
  offers: [],
  isOffersLoaded: false,
};

const offersDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(loadOffersWithError, (state) => {
    state.isOffersLoaded = true;
  });
});

export {offersDataReducer};

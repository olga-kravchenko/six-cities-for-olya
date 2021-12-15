import {createReducer} from '@reduxjs/toolkit';
import {loadOffers} from "../actions";

const initialState = {
  offers: [],
  isOffersLoaded: false,
};

const mainDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
});

export {mainDataReducer};

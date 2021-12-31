import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, updateOffers, loadOffersWithError} from "../actions/actions";
import {replaceElement} from "../../utils/utils";

const initialState = {
  offers: [],
  isOffersLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
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

export {initialState, offersData};

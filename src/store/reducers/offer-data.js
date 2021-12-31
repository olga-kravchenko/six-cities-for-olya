import {createReducer} from "@reduxjs/toolkit";
import {loadOffer, loadComments, loadNearestOffers} from "../actions/actions";

const initialState = {
  offer: {},
  comments: [],
  nearestOffers: [],
};

const offerData = createReducer(initialState, (builder) => {
  builder.addCase(loadOffer, (state, {payload}) => {
    state.offer = payload;
  });
  builder.addCase(loadComments, (state, {payload}) => {
    state.comments = payload;
  });
  builder.addCase(loadNearestOffers, (state, {payload}) => {
    state.nearestOffers = payload;
  });
});

export {initialState, offerData};

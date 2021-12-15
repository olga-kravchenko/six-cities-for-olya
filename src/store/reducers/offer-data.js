import {createReducer} from "@reduxjs/toolkit";
import {loadOffer, loadComments, loadNearestOffers} from "../actions";

const initialState = {
  offer: {},
  comments: [],
  nearestOffers: [],
};

const offerDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffer, (state, action) => {
    state.offer = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(loadNearestOffers, (state, action) => {
    state.nearestOffers = action.payload;
  });
});

export {offerDataReducer};

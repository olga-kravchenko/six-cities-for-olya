import {createReducer} from '@reduxjs/toolkit';
import {changeActiveOffer} from "../actions";

const initialState = {
  activeOfferId: ``,
};

const activeOfferDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveOffer, (state, {payload}) => {
    state.activeOfferId = payload;
  });
});

export {activeOfferDataReducer};

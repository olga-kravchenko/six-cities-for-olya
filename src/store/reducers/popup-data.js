import {createReducer} from '@reduxjs/toolkit';
import {closePopup, openPopup} from "../actions/actions";

const initialState = {
  isOpenSortingPopup: false,
};

const popupData = createReducer(initialState, (builder) => {
  builder.addCase(openPopup, (state) => {
    state.isOpenSortingPopup = !state.isOpenSortingPopup;
  });
  builder.addCase(closePopup, (state) => {
    state.isOpenSortingPopup = false;
  });
});

export {initialState, popupData};

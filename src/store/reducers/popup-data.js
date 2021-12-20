import {createReducer} from '@reduxjs/toolkit';
import {closePopup, openPopup} from "../actions";

const initialState = {
  isOpenSortingPopup: false,
};

const popupDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(openPopup, (state) => {
    state.isOpenSortingPopup = !state.isOpenSortingPopup;
  });
  builder.addCase(closePopup, (state) => {
    state.isOpenSortingPopup = false;
  });
});

export {popupDataReducer};

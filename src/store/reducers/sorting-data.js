import {createReducer} from '@reduxjs/toolkit';
import {changeSortingType, openPopup, resetSortingType} from "../actions";
import {DEFAULT_SORTING_TYPE} from "../../constants";

const initialState = {
  sortingType: DEFAULT_SORTING_TYPE,
  isOpenSortingPopup: false,
};

const sortingDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSortingType, (state, action) => {
    state.sortingType = action.payload;
    state.isOpenSortingPopup = false;
  });
  builder.addCase(openPopup, (state) => {
    state.isOpenSortingPopup = !state.isOpenSortingPopup;
  });
  builder.addCase(resetSortingType, (state) => {
    state.sortingType = DEFAULT_SORTING_TYPE;
    state.isOpenSortingPopup = false;
  });
});

export {sortingDataReducer};

import {createReducer} from '@reduxjs/toolkit';
import {changeSortingType, resetSortingType} from "../actions";
import {DEFAULT_SORTING_TYPE} from "../../constants";

const initialState = {
  sortingType: DEFAULT_SORTING_TYPE,
};

const sortingDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSortingType, (state, action) => {
    state.sortingType = action.payload;
  });
  builder.addCase(resetSortingType, (state) => {
    state.sortingType = DEFAULT_SORTING_TYPE;
  });
});

export {sortingDataReducer};

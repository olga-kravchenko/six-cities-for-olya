import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from "../actions";
import {DEFAULT_CITY} from "../../constants";

const initialState = {
  city: DEFAULT_CITY,
};

const cityDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, {payload}) => {
    state.city = payload;
  });
});

export {cityDataReducer};

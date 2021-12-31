import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from "../actions/actions";
import {DEFAULT_CITY} from "../../constants";

const initialState = {
  city: DEFAULT_CITY,
};

const cityData = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, {payload}) => {
    state.city = payload;
  });
});

export {initialState, cityData};

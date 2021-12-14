import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortingType, openPopup, changeActiveOffer, loadOffers} from "../actions";
import {DEFAULT_CITY, DEFAULT_SORTING_TYPE} from "../../constants";

const initialState = {
  city: DEFAULT_CITY,
  sortingType: DEFAULT_SORTING_TYPE,
  isOpenSortingPopup: false,
  activeOfferId: ``,
  offers: [],
  isOffersLoaded: false,
};

const mainDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
    state.isOpenSortingPopup = false;
  });
  builder.addCase(changeSortingType, (state, action) => {
    state.sortingType = action.payload;
    state.isOpenSortingPopup = false;
  });
  builder.addCase(openPopup, (state) => {
    state.isOpenSortingPopup = !state.isOpenSortingPopup;
  });
  builder.addCase(changeActiveOffer, (state, action) => {
    state.activeOfferId = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
});

export {mainDataReducer};

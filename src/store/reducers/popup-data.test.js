import {initialState, popupData} from "./popup-data";
import {closePopup, openPopup} from "../actions";

describe(`Reducer 'popupData' work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(popupData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must change the isOpenSortingPopup status to the opposite.`, () => {
    const state = {isOpenSortingPopup: false};
    expect(popupData(state, openPopup()))
      .toEqual({...initialState, isOpenSortingPopup: !state.isOpenSortingPopup});
  });

  it(`Reducer must change the isOpenSortingPopup status to 'false'.`, () => {
    const state = {isOpenSortingPopup: true};
    expect(popupData(state, closePopup()))
      .toEqual({...state, isOpenSortingPopup: false});
  });
});

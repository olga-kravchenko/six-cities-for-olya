import {initialState, offersData} from "./offers-data";
import {loadOffers, updateOffers, loadOffersWithError} from "../actions/actions";
import {replaceElement} from "../../utils/utils";

describe(`Reducer 'offersData' work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(offersData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must load offers.`, () => {
    const expectedOffers = [];
    expect(offersData(initialState, loadOffers(expectedOffers)))
      .toEqual({...initialState, offers: expectedOffers, isOffersLoaded: true});
  });

  it(`Reducer must update offers.`, () => {
    const expectedNewFavoriteOffer = {is_favorite: true};
    const state = {offers: [], isOffersLoaded: true};
    expect(offersData(state, updateOffers(expectedNewFavoriteOffer)))
      .toEqual({...state, offers: replaceElement(state.offers, expectedNewFavoriteOffer)});
  });

  it(`Reducer must change the isOffersLoaded status to 'true'.`, () => {
    expect(offersData(initialState, loadOffersWithError()))
      .toEqual({...initialState, isOffersLoaded: true});
  });
});

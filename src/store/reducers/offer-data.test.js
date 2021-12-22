import {initialState, offerData} from "./offer-data";
import {loadOffer, loadComments, loadNearestOffers} from "../actions";

describe(`Reducer 'offerData' work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(offerData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must load offer.`, () => {
    const expectedOffer = {};
    expect(offerData(initialState, loadOffer(expectedOffer)))
      .toEqual({...initialState, offer: expectedOffer});
  });

  it(`Reducer must load comments.`, () => {
    const expectedComments = [];
    expect(offerData(initialState, loadComments(expectedComments)))
      .toEqual({...initialState, comments: expectedComments});
  });

  it(`Reducer must load nearest offers.`, () => {
    const expectedNearestOffers = [];
    expect(offerData(initialState, loadNearestOffers(expectedNearestOffers)))
      .toEqual({...initialState, nearestOffers: expectedNearestOffers});
  });
});

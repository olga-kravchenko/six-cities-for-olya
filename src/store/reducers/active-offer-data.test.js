import {initialState, activeOfferData} from "./active-offer-data";
import {changeActiveOffer} from "../actions";

describe(`Reducer 'activeOfferData' work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(activeOfferData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must change the value of the id of the active offer.`, () => {
    const expectedActiveOfferId = `13`;
    expect(activeOfferData(initialState, changeActiveOffer(expectedActiveOfferId)))
      .toEqual({...initialState, activeOfferId: expectedActiveOfferId});
  });
});

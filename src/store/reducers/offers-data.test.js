import {initialState, offersData} from "./offers-data";
import {loadOffers, updateOffers, loadOffersWithError} from "../actions";
import {replaceElement} from "../../utils/utils";
import MockAdapter from 'axios-mock-adapter';
import createAxios from "../../services/axios";
import {fetchOffers} from "../axios-actions";
import {AxiosRoute} from "../../constants";

const api = createAxios(() => {});

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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to get /offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();
    apiMock
      .onGet(AxiosRoute.OFFERS)
      .reply(200, {offers: [], isOffersLoaded: true});
    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadOffers({offers: [], isOffersLoaded: true}));
      });
  });
});

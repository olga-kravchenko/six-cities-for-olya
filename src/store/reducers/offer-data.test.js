import {initialState, offerData} from "./offer-data";
import {loadOffer, loadComments, loadNearestOffers} from "../actions";
import MockAdapter from 'axios-mock-adapter';
import createAxios from "../../services/axios";
import {fetchComments, fetchNearbyOffer, fetchOffer, postComment} from "../axios-actions";
import {AxiosRoute} from "../../constants";

const api = createAxios(() => {});

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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to get /offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offerLoader = fetchOffer(id);
    apiMock
      .onGet(`${AxiosRoute.OFFERS}/${id}`)
      .reply(200, {});
    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadOffer({}));
      });
  });

  it(`Should make a correct API call to get /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const commentsLoader = fetchComments(id);
    apiMock
      .onGet(`${AxiosRoute.COMMENTS}/${id}`)
      .reply(200, []);
    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadComments([]));
      });
  });

  it(`Should make a correct API call to  post /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fakeComment = {
      comment: `Some text`,
      rating: 4,
    };
    const commentsLoader = postComment(id, fakeComment);
    apiMock
      .onPost(`${AxiosRoute.COMMENTS}/${id}`)
      .reply(200, []);
    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadComments([]));
      });
  });

  it(`Should make a correct API call to get /nearest offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const nearestOffersLoader = fetchNearbyOffer(id);
    apiMock
      .onGet(`${AxiosRoute.OFFERS}/${id}${AxiosRoute.NEARBY}`)
      .reply(200, []);
    return nearestOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadNearestOffers([]));
      });
  });
});

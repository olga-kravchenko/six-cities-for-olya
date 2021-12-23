import {initialState, favoritesData} from "./favorites-data";
import {loadFavoriteOffers, updateFavoritesOffers, updateOffers} from "../actions";
import {addElement, removeElement} from "../../utils/utils";
import MockAdapter from 'axios-mock-adapter';
import createAxios from "../../services/axios";
import {fetchFavoriteOffers, postFavoriteOffer} from "../axios-actions";
import {AxiosRoute} from "../../constants";

const api = createAxios(() => {});

describe(`Reducer 'favoritesData' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(favoritesData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must load favorite offers.`, () => {
    const newFavoriteOffers = [];
    expect(favoritesData(initialState, loadFavoriteOffers(newFavoriteOffers)))
      .toEqual({...initialState, favoriteOffers: newFavoriteOffers, isFavoritesLoaded: true});
  });

  it(`Reducer must update favorite offers`, () => {
    const newFavoriteOffer = {is_favorite: true};
    const oldFavoriteOffer = {is_favorite: false};
    const state = {favoriteOffers: [], isFavoritesLoaded: true};

    const getFavoriteOffers = (newOffer) => {
      let favoriteOffers;
      if (newOffer.is_favorite) {
        favoriteOffers = addElement(state.favoriteOffers, newFavoriteOffer);
      } else {
        favoriteOffers = removeElement(state.favoriteOffers, newFavoriteOffer);
      }
      return favoriteOffers;
    };

    expect(favoritesData(state, updateFavoritesOffers(newFavoriteOffer)))
      .toEqual({...state, favoriteOffers: getFavoriteOffers(newFavoriteOffer)});
    expect(favoritesData(state, updateFavoritesOffers(oldFavoriteOffer)))
      .toEqual({...state, favoriteOffers: getFavoriteOffers(oldFavoriteOffer)});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to get /favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteOffers();
    apiMock
      .onGet(AxiosRoute.FAVORITE)
      .reply(200, []);
    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFavoriteOffers([]));
      });
  });

  it(`Should make a correct API call to  post /favorite offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const postFavoriteOfferLoader = postFavoriteOffer(id, status);
    apiMock
      .onPost(`${AxiosRoute.FAVORITE}/${id}/${status}`)
      .reply(200, {});
    return postFavoriteOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, updateOffers({}));
        expect(dispatch).toHaveBeenNthCalledWith(2, updateFavoritesOffers({}));
      });
  });
});

import {initialState, favoritesData} from "./favorites-data";
import {loadFavoriteOffers, updateFavoritesOffers} from "../actions";
import {addElement, removeElement} from "../../utils/utils";

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

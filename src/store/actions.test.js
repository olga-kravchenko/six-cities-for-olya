import {
  ActionType,
  saveUserInfo,
  changeAuthStatus,
  changeCity,
  loadOffers,
  updateOffers,
  loadOffersWithError,
  changeSortingType,
  resetSortingType,
  openPopup,
  closePopup,
  changeActiveOffer,
  loadOffer,
  loadComments,
  loadNearestOffers,
  loadFavoriteOffers,
  updateFavoritesOffers,
  redirectToRoute
} from "./actions";
import {DEFAULT_SORTING_TYPE} from "../constants";


describe(`Action creators work correctly`, () => {
  it(`Action creator for saveUserInfo returns correct action`, () => {
    const expectedUserInfo = {};
    const expectedAction = {
      type: ActionType.SAVE_USER_INFO,
      payload: expectedUserInfo,
    };
    expect(saveUserInfo(expectedUserInfo)).toEqual(expectedAction);
  });

  it(`Action creator for changeAuthStatus returns correct action`, () => {
    const expectedAuthStatus = true;
    const expectedAction = {
      type: ActionType.CHANGE_AUTH,
      payload: expectedAuthStatus,
    };
    expect(changeAuthStatus(expectedAuthStatus)).toEqual(expectedAction);
  });

  it(`Action creator for changeCity returns correct action`, () => {
    const expectedCity = `CityName`;
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: expectedCity,
    };
    expect(changeCity(expectedCity)).toEqual(expectedAction);
  });

  it(`Action creator for loadOffers returns correct action`, () => {
    const expectedOffers = [];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: expectedOffers,
    };
    expect(loadOffers(expectedOffers)).toEqual(expectedAction);
  });

  it(`Action creator for updateOffers returns correct action`, () => {
    const expectedOffer = {};
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: expectedOffer,
    };
    expect(updateOffers(expectedOffer)).toEqual(expectedAction);
  });

  it(`Action creator for loadOffersWithError returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_WITH_ERROR,
    };
    expect(loadOffersWithError()).toEqual(expectedAction);
  });

  it(`Action creator for changeSortingType returns correct action`, () => {
    const expectedSortingType = {};
    const expectedAction = {
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: expectedSortingType,
    };
    expect(changeSortingType(expectedSortingType)).toEqual(expectedAction);
  });

  it(`Action creator for resetSortingType returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_SORTING_TYPE,
      payload: DEFAULT_SORTING_TYPE,
    };
    expect(resetSortingType(DEFAULT_SORTING_TYPE)).toEqual(expectedAction);
  });

  it(`Action creator for openPopup returns correct action`, () => {
    const expectedOpenPopupStatus = true;
    const expectedAction = {
      type: ActionType.OPEN_POPUP,
      payload: expectedOpenPopupStatus,
    };
    expect(openPopup(expectedOpenPopupStatus)).toEqual(expectedAction);
  });

  it(`Action creator for closePopup returns correct action`, () => {
    const expectedClosePopupStatus = false;
    const expectedAction = {
      type: ActionType.CLOSE_POPUP,
      payload: expectedClosePopupStatus,
    };
    expect(closePopup(expectedClosePopupStatus)).toEqual(expectedAction);
  });

  it(`Action creator for changeActiveOffer returns correct action`, () => {
    const expectedActiveOffer = 12;
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: expectedActiveOffer,
    };
    expect(changeActiveOffer(expectedActiveOffer)).toEqual(expectedAction);
  });

  it(`Action creator for loadOffer returns correct action`, () => {
    const expectedOffer = {};
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: expectedOffer,
    };
    expect(loadOffer(expectedOffer)).toEqual(expectedAction);
  });

  it(`Action creator for loadComments returns correct action`, () => {
    const expectedComments = [];
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: expectedComments,
    };
    expect(loadComments(expectedComments)).toEqual(expectedAction);
  });

  it(`Action creator for loadNearestOffers returns correct action`, () => {
    const expectedNearestOffers = [];
    const expectedAction = {
      type: ActionType.LOAD_NEAREST_OFFERS,
      payload: expectedNearestOffers,
    };
    expect(loadNearestOffers(expectedNearestOffers)).toEqual(expectedAction);
  });

  it(`Action creator for loadFavoriteOffers returns correct action`, () => {
    const expectedFavoriteOffers = [];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: expectedFavoriteOffers,
    };
    expect(loadFavoriteOffers(expectedFavoriteOffers)).toEqual(expectedAction);
  });

  it(`Action creator for updateFavoritesOffers returns correct action`, () => {
    const expectedFavoriteOffer = {};
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE_OFFERS,
      payload: expectedFavoriteOffer,
    };
    expect(updateFavoritesOffers(expectedFavoriteOffer)).toEqual(expectedAction);
  });

  it(`Action creator for redirectToRoute returns correct action`, () => {
    const expectedRoute = {};
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: expectedRoute,
    };
    expect(redirectToRoute(expectedRoute)).toEqual(expectedAction);
  });

});

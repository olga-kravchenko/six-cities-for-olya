import MockAdapter from "axios-mock-adapter";
import {
  checkAuth,
  fetchComments,
  fetchFavoriteOffers,
  fetchNearbyOffer,
  fetchOffer, fetchOffers, login, logout,
  postComment,
  postFavoriteOffer
} from "./axios-actions";
import {AppRoute, AxiosRoute} from "../../constants";
import {
  changeAuthStatus,
  loadComments,
  loadFavoriteOffers,
  loadNearestOffers,
  loadOffer, loadOffers, redirectToRoute, saveUserInfo,
  updateFavoritesOffers,
  updateOffers
} from "./actions";
import createAxios from "../../services/axios";

const api = createAxios(() => {});

describe(`Async operation favoritesData work correctly`, () => {
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

describe(`Async operation offerData work correctly`, () => {
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

describe(`Async operation offersData work correctly`, () => {
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

describe(`Async operation userData work correctly`, () => {
  it(`Should make a correct API call to get /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();
    apiMock
      .onGet(AxiosRoute.LOGIN)
      .reply(200, {userInfo: [{email: ``, avatar_url: ``}], isAuth: true});
    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, saveUserInfo({userInfo: [{email: ``, avatar_url: ``}], isAuth: true}));
      });
  });

  it(`Should make a correct API call to  post /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);
    apiMock
      .onPost(AxiosRoute.LOGIN)
      .reply(200, {userInfo: {email: ``, avatar_url: ``}, isAuth: true});
    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, redirectToRoute(AppRoute.MAIN));
        expect(dispatch).toHaveBeenNthCalledWith(2, saveUserInfo({userInfo: {email: ``, avatar_url: ``}, isAuth: true}));
      });
  });

  it(`Should make a correct API call to get /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();
    apiMock
      .onGet(AxiosRoute.LOGOUT)
      .reply(200);
    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, changeAuthStatus());
        expect(dispatch).toHaveBeenNthCalledWith(2, redirectToRoute(AppRoute.MAIN));
      });
  });
});

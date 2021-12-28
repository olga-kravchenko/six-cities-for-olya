import {initialState, userData} from "./user-data";
import {saveUserInfo, changeAuthStatus, redirectToRoute} from "../actions";
import MockAdapter from 'axios-mock-adapter';
import createAxios from "../../services/axios";
import {checkAuth, login, logout} from "../axios-actions";
import {AppRoute, AxiosRoute} from "../../constants";

const api = createAxios(() => {});

describe(`Reducer 'userData' should work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(userData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must update changeAuthStatus to 'true'.`, () => {
    expect(userData(initialState, changeAuthStatus()))
      .toEqual({...initialState, isAuth: false});
  });

  it(`Reducer must update userInfo.`, () => {
    const state = {isAuth: true, userInfo: {email: ``, avatar_url: ``}};
    const expectedUserAuthInfo = {email: `some-email`, avatar_url: `some-img`};
    expect(userData(state, saveUserInfo(expectedUserAuthInfo)))
      .toEqual({...state, userInfo: expectedUserAuthInfo});
  });
});

describe(`Async operation work correctly`, () => {
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


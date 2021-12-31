import {initialState, userData} from "./user-data";
import {saveUserInfo, changeAuthStatus} from "../actions/actions";

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

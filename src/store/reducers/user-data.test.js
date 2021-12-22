import {initialState, userData} from "./user-data";
import {saveUserInfo, changeAuthStatus} from "../actions";

describe(`Reducer 'userData' should work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(userData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must update changeAuthStatus to 'true'.`, () => {
    expect(userData(initialState, changeAuthStatus(true)))
      .toEqual({...initialState, isAuth: true});
  });

  it(`Reducer must update userInfo.`, () => {
    const expectedUserAuthInfo = {email: ``, avatar_url: ``};
    expect(userData(initialState, saveUserInfo(expectedUserAuthInfo)))
      .toEqual({...initialState, userInfo: expectedUserAuthInfo});
  });
});

import {saveUserInfo, changeAuthStatus} from "../actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  isAuth: false,
};

const userData = createReducer(initialState, (builder) => {
  builder.addCase(saveUserInfo, (state, {payload}) => {
    state.userInfo = payload;
    state.isAuth = true;
  });
  builder.addCase(changeAuthStatus, (state) => {
    state.isAuth = false;
  });
});

export {initialState, userData};

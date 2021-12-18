import {saveUserInfo, changeAuthStatus} from "../actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  isAuth: false,
};

const userDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(saveUserInfo, (state, {payload}) => {
    state.userInfo = payload;
  });
  builder.addCase(changeAuthStatus, (state, {payload}) => {
    state.isAuth = payload;
  });
});

export {userDataReducer};

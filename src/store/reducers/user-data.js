import {saveUserInfo, changeAuthStatus} from "../actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  isAuth: false,
};

const userDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(saveUserInfo, (state, action) => {
    state.userInfo = action.payload;
  });
  builder.addCase(changeAuthStatus, (state, action) => {
    state.isAuth = action.payload;
  });
});

export {userDataReducer};

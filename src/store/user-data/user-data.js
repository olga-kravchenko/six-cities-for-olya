import {ActionType} from "../actions";

const initialState = {
  userInfo: {email: ``, avatar_url: ``},
  isAuth: false,
};

const userDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SAVE_USER_INFO:
      return {...state, userInfo: payload};
    case ActionType.CHANGE_AUTH:
      return {...state, isAuth: payload};
    default:
      return state;
  }
};

export {userDataReducer};

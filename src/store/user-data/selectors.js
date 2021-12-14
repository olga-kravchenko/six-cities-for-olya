import {Namespace} from "../root-reducer";

const getUserInfo = (state) => state[Namespace.USER].userInfo;
const getAuthStatus = (state) => state[Namespace.USER].isAuth;

export {getUserInfo, getAuthStatus};

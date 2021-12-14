import {combineReducers} from "@reduxjs/toolkit";
import {userDataReducer} from "./user-data/user-data";
import {favoritesDataReducer} from "./favorites-data/favorites-data";
import {mainDataReducer} from "./main-data/main-data";
import {offerDataReducer} from "./offer-data/offer-data";

const Namespace = {
  USER: `USER`,
  FAVORITES: `FAVORITES`,
  MAIN: `MAIN`,
  OFFER: `OFFER`,
};

const rootReducer = combineReducers({
  [Namespace.USER]: userDataReducer,
  [Namespace.FAVORITES]: favoritesDataReducer,
  [Namespace.MAIN]: mainDataReducer,
  [Namespace.OFFER]: offerDataReducer,
});

export {Namespace};
export default rootReducer;

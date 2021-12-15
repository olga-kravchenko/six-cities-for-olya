import {combineReducers} from "@reduxjs/toolkit";
import {userDataReducer} from "./reducers/user-data";
import {favoritesDataReducer} from "./reducers/favorites-data";
import {mainDataReducer} from "./reducers/main-data";
import {offerDataReducer} from "./reducers/offer-data";
import {cityDataReducer} from "./reducers/city-data";
import {sortingDataReducer} from "./reducers/sorting-data";
import {activeOfferDataReducer} from "./reducers/active-offer-data";

const Namespace = {
  SORTING: `SORTING`,
  ACTIVE_OFFER: `ACTIVE_OFFER`,
  CITY: `CITY`,
  USER: `USER`,
  FAVORITES: `FAVORITES`,
  MAIN: `MAIN`,
  OFFER: `OFFER`,
};

const rootReducer = combineReducers({
  [Namespace.SORTING]: sortingDataReducer,
  [Namespace.ACTIVE_OFFER]: activeOfferDataReducer,
  [Namespace.CITY]: cityDataReducer,
  [Namespace.USER]: userDataReducer,
  [Namespace.FAVORITES]: favoritesDataReducer,
  [Namespace.MAIN]: mainDataReducer,
  [Namespace.OFFER]: offerDataReducer,
});

export {Namespace};
export default rootReducer;

import {combineReducers} from "@reduxjs/toolkit";
import {userDataReducer} from "./user-data/user-data";
import {favoritesDataReducer} from "./favorites-data/favorites-data";
import {mainDataReducer} from "./main-data/main-data";
import {offerDataReducer} from "./offer-data/offer-data";
import {cityDataReducer} from "./city-data/city-data";
import {sortingDataReducer} from "./sorting-data/sorting-data";
import {activeOfferDataReducer} from "./active-offer-data/active-offer-data";

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

import {combineReducers} from "@reduxjs/toolkit";
import {userDataReducer} from "./reducers/user-data";
import {cityDataReducer} from "./reducers/city-data";
import {offersDataReducer} from "./reducers/offers-data";
import {sortingTypeDataReducer} from "./reducers/sorting-type-data";
import {popupDataReducer} from "./reducers/popup-data";
import {activeOfferDataReducer} from "./reducers/active-offer-data";
import {offerDataReducer} from "./reducers/offer-data";
import {favoritesDataReducer} from "./reducers/favorites-data";

const Namespace = {
  USER: `USER`,
  CITY: `CITY`,
  OFFERS: `OFFERS`,
  SORTING_TYPE: `SORTING_TYPE`,
  POPUP: `POPUP`,
  ACTIVE_OFFER: `ACTIVE_OFFER`,
  OFFER: `OFFER`,
  FAVORITES: `FAVORITES`,
};

const rootReducer = combineReducers({
  [Namespace.USER]: userDataReducer,
  [Namespace.CITY]: cityDataReducer,
  [Namespace.OFFERS]: offersDataReducer,
  [Namespace.SORTING_TYPE]: sortingTypeDataReducer,
  [Namespace.POPUP]: popupDataReducer,
  [Namespace.ACTIVE_OFFER]: activeOfferDataReducer,
  [Namespace.OFFER]: offerDataReducer,
  [Namespace.FAVORITES]: favoritesDataReducer,
});

export {Namespace};
export default rootReducer;

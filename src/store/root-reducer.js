import {combineReducers} from "@reduxjs/toolkit";
import {userData} from "./reducers/user-data";
import {cityData} from "./reducers/city-data";
import {offersData} from "./reducers/offers-data";
import {sortingTypeData} from "./reducers/sorting-type-data";
import {popupData} from "./reducers/popup-data";
import {activeOfferData} from "./reducers/active-offer-data";
import {offerData} from "./reducers/offer-data";
import {favoritesData} from "./reducers/favorites-data";

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
  [Namespace.USER]: userData,
  [Namespace.CITY]: cityData,
  [Namespace.OFFERS]: offersData,
  [Namespace.SORTING_TYPE]: sortingTypeData,
  [Namespace.POPUP]: popupData,
  [Namespace.ACTIVE_OFFER]: activeOfferData,
  [Namespace.OFFER]: offerData,
  [Namespace.FAVORITES]: favoritesData,
});

export {Namespace};
export default rootReducer;

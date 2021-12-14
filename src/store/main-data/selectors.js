import {Namespace} from "../root-reducer";

const getCity = (state) => state[Namespace.MAIN].city;
const getSortingType = (state) => state[Namespace.MAIN].sortingType;
const getOpenSortingPopupStatus = (state) => state[Namespace.MAIN].isOpenSortingPopup;
const getActiveOfferId = (state) => state[Namespace.MAIN].activeOfferId;
const getOffers = (state) => state[Namespace.MAIN].offers;
const getOffersLoadedStatus = (state) => state[Namespace.MAIN].isOffersLoaded;

export {getCity, getSortingType, getOpenSortingPopupStatus, getActiveOfferId, getOffers, getOffersLoadedStatus};

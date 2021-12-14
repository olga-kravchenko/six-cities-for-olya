import {Namespace} from "../root-reducer";

const getFavoriteOffers = (state) => state[Namespace.FAVORITES].favoriteOffers;
const getLoadedFavoritesStatus = (state) => state[Namespace.FAVORITES].isFavoritesLoaded;

export {getFavoriteOffers, getLoadedFavoritesStatus};

import {Namespace} from "../root-reducer";

const getOffer = (state) => state[Namespace.OFFER].offer;
const getComments = (state) => state[Namespace.OFFER].comments;
const getNearestOffers = (state) => state[Namespace.OFFER].nearestOffers;

export {getOffer, getComments, getNearestOffers};

import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../constants";

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) =>{
      dispatch(ActionCreator.saveUserInfo(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      if (email && password) {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.saveUserInfo(data));
      } else {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      }
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.choseOffer(data));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/page-not-found`)))
);

const fetchNearbyOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearbyOffers(data));
    })
);

export {fetchOffers, checkAuthorization, login, logout, fetchOffer, fetchNearbyOffer};

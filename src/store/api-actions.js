import {ActionCreator} from "./action";
import {AuthorizationStatus, ApiRoute, AppRoute} from "../constants";

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.LOGIN}`)
    .then(({data}) =>{
      dispatch(ActionCreator.saveUserInfo(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      if (email && password) {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.saveUserInfo(data));
      } else {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      }
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`)))
);

const logout = () => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.LOGOUT}`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(data));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.PAGE_NOT_FOUND}`)))
);

const fetchNearbyOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}${ApiRoute.NEARBY}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearestOffers(data));
    })
);

export {fetchOffers, checkAuthorization, login, logout, fetchOffer, fetchNearbyOffer};

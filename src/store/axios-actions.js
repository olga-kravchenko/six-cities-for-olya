import {ActionCreator} from "./actions";
import {AuthorizationStatus, AxiosRoute, AppRoute} from "../constants";

const fetchOffers = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const checkAuth = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.LOGIN}`)
    .then(({data}) => dispatch(ActionCreator.saveUserInfo(data)))
    .then(() => dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.AUTH)))
);

const login = ({login: email, password}) => (dispatch, _, axios) => (
  axios.post(`${AxiosRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      if (email && password) {
        dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.saveUserInfo(data));
      } else {
        dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.NO_AUTH));
      }
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`)))
);

const logout = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.LOGOUT}`)
    .then(() => dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.NO_AUTH)))
);

const fetchOffer = (id) => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.PAGE_NOT_FOUND}`)))
);

const fetchNearbyOffer = (id) => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.OFFERS}/${id}${AxiosRoute.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.loadNearestOffers(data)))
);

const fetchFavoriteOffers = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.FAVORITE}`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(data)))
);

const fetchComments = (id) => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

const postComment = (id, {comment, rating}) => (dispatch, _, axios) => (
  axios.post(`${AxiosRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export {
  fetchOffers,
  checkAuth,
  login,
  logout,
  fetchOffer,
  fetchNearbyOffer,
  fetchFavoriteOffers,
  fetchComments,
  postComment
};

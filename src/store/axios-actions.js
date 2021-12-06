import {ActionCreator} from "./actions";
import {AxiosRoute, AppRoute} from "../constants";

const errorToast = (message) => {
  const toastContainer = document.createElement(`div`);
  toastContainer.classList.add(`toast-container`);
  document.body.append(toastContainer);
  const toastItem = document.createElement(`div`);
  toastItem.textContent = message;
  toastItem.classList.add(`toast-item`);
  toastContainer.append(toastItem);

  const ERROR_TIMEOUT = 5000;
  setTimeout(() => {
    toastItem.remove();
  }, ERROR_TIMEOUT);
};

const fetchOffers = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const checkAuth = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.LOGIN}`)
    .then(({data}) => dispatch(ActionCreator.saveUserInfo(data)))
    .then(() => dispatch(ActionCreator.changeAuthStatus(true)))
    .catch(() => errorToast(`User don't authorize`))
);

const login = ({login: email, password}) => (dispatch, _, axios) => (
  axios.post(`${AxiosRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.changeAuthStatus(true));
      dispatch(ActionCreator.saveUserInfo(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`)))
    .catch(() => errorToast(`Enter your password and email, please!`))
);

const logout = () => (dispatch, _, axios) => (
  axios.get(`${AxiosRoute.LOGOUT}`)
    .then(() => dispatch(ActionCreator.changeAuthStatus(false)))
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
    .catch(() => errorToast(`Comments didn't post!`))
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

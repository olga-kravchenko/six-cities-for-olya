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

const showErrorMassage = (err) => errorToast(`Error ${err.response.status} : ${err.response.statusText}`);

const fetchOffers = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const checkAuth = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.LOGIN}`)
    .then(({data}) => dispatch(ActionCreator.saveUserInfo(data)))
    .then(() => dispatch(ActionCreator.changeAuthStatus(true)))
    .catch(showErrorMassage)
);

const login = ({login: email, password}) => (dispatch, _, axiosApi) => (
  axiosApi.post(`${AxiosRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.changeAuthStatus(true));
      dispatch(ActionCreator.saveUserInfo(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`)))
    .catch(showErrorMassage)
);

const logout = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.LOGOUT}`)
    .then(() => dispatch(ActionCreator.changeAuthStatus(false)))
);

const fetchOffer = (id) => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.PAGE_NOT_FOUND}`)))
);

const fetchNearbyOffer = (id) => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.OFFERS}/${id}${AxiosRoute.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.loadNearestOffers(data)))
);

const fetchFavoriteOffers = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.FAVORITE}`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(data)))
);

const fetchComments = (id) => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

const postComment = (id, comment) => (dispatch, _, axiosApi) => (
  axiosApi.post(`${AxiosRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch(showErrorMassage)
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

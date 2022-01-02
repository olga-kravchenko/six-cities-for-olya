import {
  changeAuthStatus,
  saveUserInfo,
  loadOffers,
  loadOffer,
  loadOffersWithError,
  loadComments,
  loadNearestOffers,
  loadFavoriteOffers,
  updateFavoritesOffers,
  redirectToRoute,
  updateOffers
} from "./actions";
import {AxiosRoute, AppRoute} from "../../constants";

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

const checkAuth = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.LOGIN}`)
    .then(({data}) => dispatch(saveUserInfo(data)))
    .catch(showErrorMassage)
);

const login = ({login: email, password}) => (dispatch, _, axiosApi) => (
  axiosApi.post(`${AxiosRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      dispatch(redirectToRoute(`${AppRoute.MAIN}`));
      dispatch(saveUserInfo(data));
    })
    .catch(showErrorMassage)
);

const logout = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.LOGOUT}`)
    .then(() => dispatch(changeAuthStatus()))
    .then(() => dispatch(redirectToRoute(`${AppRoute.MAIN}`)))
);

const fetchOffers = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.OFFERS}`)
    .then(({data}) => dispatch(loadOffers(data)))
    .catch((err) => {
      showErrorMassage(err);
      dispatch(loadOffersWithError());
    })
);

const fetchOffer = (id) => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(data)))
    .catch(() => dispatch(redirectToRoute(`${AppRoute.PAGE_NOT_FOUND}`)))
);

const fetchComments = (id) => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

const postComment = (id, comment) => (dispatch, _, axiosApi) => (
  axiosApi.post(`${AxiosRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(showErrorMassage)
);

const fetchNearbyOffer = (id) => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.OFFERS}/${id}${AxiosRoute.NEARBY}`)
    .then(({data}) => dispatch(loadNearestOffers(data)))
);

const fetchFavoriteOffers = () => (dispatch, _, axiosApi) => (
  axiosApi.get(`${AxiosRoute.FAVORITE}`)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
);

const postFavoriteOffer = (id, status) => (dispatch, _, axiosApi) => (
  axiosApi.post(`${AxiosRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateOffers(data));
      return data;
    })
    .then((data) => dispatch(updateFavoritesOffers(data)))
    .catch(() => dispatch(redirectToRoute(`${AppRoute.LOGIN}`)))
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
  postComment,
  postFavoriteOffer
};
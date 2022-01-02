import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Reviews from "./reviews";
import MockAdapter from "axios-mock-adapter";
import {fetchComments} from "../../store/actions/axios-actions";
import {AxiosRoute} from "../../constants";
import {loadComments} from "../../store/actions/actions";
import createAxios from "../../services/axios";

const api = createAxios(() => {});

it(`Reviews should render correctly on page`, () => {
  const id = `1`;
  const mockStore = configureStore({});
  const extendedComment = {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  };
  const store = mockStore({
    OFFER: {offer: {id: 1}, comments: [extendedComment]},
    USER: {userInfo: {email: `some-email`, avatar_url: `img.svg`}, isAuth: true},
  });
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const fetchCommentsLoader = fetchComments(id);
  apiMock
    .onGet(`${AxiosRoute.COMMENTS}/1`)
    .reply(200, [extendedComment]);
  return fetchCommentsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, loadComments([extendedComment]));
      render(
          <Provider store={store}>
            <Reviews id={id}/>
          </Provider>);
      expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    });
});


import React from "react";
import {screen, render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {AppRoute} from "../../constants";
import Favorites from "./favorites";

it(`Favorites should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  history.push(AppRoute.FAVORITES);
  const offers = [
    {
      "id": 1,
      "is_favorite": true,
      "city": {
        "name": `Paris`
      }
    },
    {
      "id": 2,
      "is_favorite": true,
      "city": {
        "name": `Amsterdam`
      }
    },
    {
      "id": 3,
      "is_favorite": true,
      "city": {
        "name": `Hamburg`
      }
    },
  ];

  const store = mockStore({
    FAVORITES: {favoriteOffers: offers, isFavoritesLoaded: true},
    USER: {userInfo: {email: `some-email`, avatar_url: `img.svg`}, isAuth: true},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites/>
        </Router>
      </Provider>);
  expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
});

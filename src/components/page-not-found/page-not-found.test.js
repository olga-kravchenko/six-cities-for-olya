import React from "react";
import {screen, render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {AppRoute} from "../../constants";
import PageNotFound from "./page-not-found";

it(`PageNotFound should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  history.push(AppRoute.PAGE_NOT_FOUND);

  const store = mockStore({
    USER: {userInfo: {email: `some-email`, avatar_url: `img.svg`}, isAuth: true},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <PageNotFound/>
        </Router>
      </Provider>);
  expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
});


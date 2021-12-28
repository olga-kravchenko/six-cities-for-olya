import React from "react";
import {screen, render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {AppRoute} from "../../constants";
import Login from "./login";

it(`Login should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  history.push(AppRoute.LOGIN);

  const store = mockStore({
    USER: {isAuth: false},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Login/>
        </Router>
      </Provider>);
  expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
});


import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import Header from "./header";
import {createMemoryHistory} from "history";

const mockStore = configureStore({});
let history;

describe(`Header should render correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`Header should render correctly when user is not auth`, () => {
    const store = mockStore({
      USER: {userInfo: {email: ``, avatar_url: ``}, isAuth: false},
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Header/>
          </Router>/
        </Provider>);
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it(`Header should render correctly when user is auth`, () => {
    const store = mockStore({
      USER: {userInfo: {email: `some-email`, avatar_url: `img.svg`}, isAuth: true},
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Header/>
          </Router>/
        </Provider>);
    expect(screen.getByText(/some-email/i)).toBeInTheDocument();
  });
});

import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import EmptyMain from "./empty-main";
import {DEFAULT_CITY} from "../../constants";

it(`EmptyMain should render correctly`, () => {
  const mockStore = configureStore({});
  const store = mockStore({
    CITY: {city: DEFAULT_CITY},
  });

  render(
      <Provider store={store}>
        <EmptyMain/>
      </Provider>);
  expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  expect(screen.getByText(/We could not find any property available at the moment in/i)).toBeInTheDocument();
});

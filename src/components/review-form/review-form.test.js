import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import ReviewForm from "./review-form";

it(`Cities should render correctly`, () => {
  const mockStore = configureStore({});
  const store = mockStore({});
  render(
      <Provider store={store}>
        <ReviewForm/>
      </Provider>);
  expect(screen.getByText(/and describe your stay with at least/i)).toBeInTheDocument();
});


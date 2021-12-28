import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SortingTypes from "./sorting-types";
import {DEFAULT_SORTING_TYPE} from "../../constants";

it(`SortingTypes should render correctly`, () => {
  const mockStore = configureStore({});
  const store = mockStore({
    SORTING_TYPE: {sortingType: DEFAULT_SORTING_TYPE},
    POPUP: {isOpenSortingPopup: false}
  });

  render(
      <Provider store={store}>
        <SortingTypes/>
      </Provider>);
  expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
});

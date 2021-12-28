import React from "react";
import {render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Offers from "./offers";
import {DEFAULT_SORTING_TYPE} from "../../constants";

describe(`Offers should render correctly`, () => {
  it(`Offers should render correctly on Main page`, () => {
    const extendedOffers = [
      {id: 1},
      {id: 3},
      {id: 2},
    ];
    const mockStore = configureStore({});
    const store = mockStore({
      SORTING_TYPE: {sortingType: DEFAULT_SORTING_TYPE},
    });
    const {container} = render(
        <Provider store={store}>
          <Offers offers={extendedOffers} pageType="cities"/>
        </Provider>);
    expect(container).toMatchSnapshot();
  });

  it(`Offers should render correctly on Favorite page`, () => {
    const extendedOffers = [
      {id: 1},
      {id: 3},
      {id: 2},
    ];
    const mockStore = configureStore({});
    const store = mockStore({
      SORTING_TYPE: {sortingType: DEFAULT_SORTING_TYPE},
    });
    const {container} = render(
        <Provider store={store}>
          <Offers offers={extendedOffers} pageType="favorites"/>
        </Provider>);
    expect(container).toMatchSnapshot();
  });
});

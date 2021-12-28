import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Cities from "./cities";
import {CityNames, DEFAULT_CITY, DEFAULT_SORTING_TYPE} from "../../constants";

const cities = Object.values(CityNames);

it(`Cities should render correctly`, () => {
  const mockStore = configureStore({});
  const store = mockStore({
    CITY: {city: DEFAULT_CITY},
    SORTING_TYPE: {sortingType: DEFAULT_SORTING_TYPE},
    POPUP: {isOpenSortingPopup: false}
  });

  render(
      <Provider store={store}>
        <Cities/>
      </Provider>);
  cities.forEach((city) => expect(screen.getByText(`${city}`)).toBeInTheDocument());
});

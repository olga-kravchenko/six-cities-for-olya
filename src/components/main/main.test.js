import React from "react";
import {screen, render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {AppRoute, DEFAULT_CITY, DEFAULT_SORTING_TYPE} from "../../constants";
import Main from "./main";

jest.mock(`../map/map`, () => {
  const mockMap = () => <>Map</>;
  mockMap.displayName = `MockMap`;

  return {
    __esModule: true,
    default: () => {
      return mockMap();
    },
  };
});

it(`Main should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  history.push(AppRoute.MAIN);
  const offerList = [
    {
      "id": 1,
      "is_favorite": true,
      "city": {
        "name": `Paris`
      }
    }
  ];

  const store = mockStore({
    OFFERS: {offers: offerList, isOffersLoaded: true},
    CITY: {city: DEFAULT_CITY},
    SORTING_TYPE: {sortingType: DEFAULT_SORTING_TYPE},
    POPUP: {isOpenSortingPopup: false},
    USER: {userInfo: {email: `some-email`, avatar_url: `img.svg`}, isAuth: true},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Main/>
        </Router>
      </Provider>);
  expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
});

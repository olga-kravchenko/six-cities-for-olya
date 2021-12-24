import React from "react";
import {render, screen} from "@testing-library/react";
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from "./app";
import {Router} from "react-router-dom";
import {AppRoute, DEFAULT_CITY, DEFAULT_SORTING_TYPE} from "../../constants";
import {Namespace} from "../../store/root-reducer";
import {Provider} from "react-redux";

const mockOffers = [
  {
    "id": 1,
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 2,
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 3,
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "id": 4,
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [Namespace.USER]: {isAuth: false},
      [Namespace.CITY]: {city: DEFAULT_CITY},
      [Namespace.ACTIVE_OFFER]: {activeOfferId: ``},
      [Namespace.POPUP]: {isOpenSortingPopup: false},
      [Namespace.SORTING_TYPE]: {sortingType: DEFAULT_SORTING_TYPE},
      [Namespace.OFFERS]: {
        offers: mockOffers,
        isOffersLoaded: true
      },
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it(`Render 'Login' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);
    const store = mockStore({
      [Namespace.USER]: {isAuth: false},
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'Favorites' when user navigate to '/favorite' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);
    const store = mockStore({
      [Namespace.USER]: {userInfo: {email: `some-email`, avatar_url: `img.svg`}, isAuth: true},
      [Namespace.FAVORITES]: {favoriteOffers: [], isFavoritesLoaded: true}
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });

  it(`Render 'PageNotFound' when user navigate to 'wrong address' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.PAGE_NOT_FOUND);
    const store = mockStore({
      [Namespace.USER]: {isAuth: false},
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
  });

});


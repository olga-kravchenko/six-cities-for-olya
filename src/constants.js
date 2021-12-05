const CityNames = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const DEFAULT_CITY = CityNames.PARIS;
const DEFAULT_SORTING_TYPE = SortingType.POPULAR;
const DEFAULT_STATE = false;

const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  PAGE_NOT_FOUND: `/page-not-found`,
};

const AxiosRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  NEARBY: `/nearby`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
};

const HttpCode = {
  OK: 200,
  NO_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export {
  CityNames,
  SortingType,
  DEFAULT_CITY,
  DEFAULT_SORTING_TYPE,
  DEFAULT_STATE,
  AppRoute,
  AxiosRoute,
  HttpCode
};

import {SortingType} from "../constants";

const ONE_HANGED_PERCENT = 100;
const MAX_STAR_QUANTITY = 5;

const sortOffersByRating = (offerA, offerB) => (offerB.rating - offerA.rating);
const sortOffersByPriceLowToHigh = (offerA, offerB) => (offerA.price - offerB.price);
const sortOffersByPriceHighToLow = (offerA, offerB) => (offerB.price - offerA.price);

const convertRatingToPercent = (rating) => {
  const integer = Math.round(rating);
  return integer * ONE_HANGED_PERCENT / MAX_STAR_QUANTITY + `%`;
};

const getRelevantSortingOffers = (sortingType, offers, city) => {
  let sortingCallback = null;
  switch (sortingType) {
    case SortingType.PRICE_LOW_TO_HIGH:
      sortingCallback = sortOffersByPriceLowToHigh;
      break;
    case SortingType.PRICE_HIGH_TO_LOW:
      sortingCallback = sortOffersByPriceHighToLow;
      break;
    case SortingType.TOP_RATED_FIRST:
      sortingCallback = sortOffersByRating;
      break;
  }
  const filteredOffers = [...offers.filter((e) => e.city.name === city)];
  return sortingCallback ? filteredOffers.sort(sortingCallback) : filteredOffers;
};

const sortCities = (offers, cities) => {
  const citiesOff = offers.map((e) => e.city.name);
  const arr = [...new Set(citiesOff)];
  const newArr = [];
  cities.forEach((city) => {
    const newCity = arr.find((e) => e === city);
    if (newCity) {
      newArr.push(newCity);
    }
  });
  return newArr;
};

const ERROR_TIMEOUT = 5000;
const errorToast = (message) => {
  const toastContainer = document.createElement(`div`);
  toastContainer.classList.add(`toast-container`);
  document.body.append(toastContainer);

  const toastItem = document.createElement(`div`);
  toastItem.textContent = message;
  toastItem.classList.add(`toast-item`);

  toastContainer.append(toastItem);

  setTimeout(() => {
    toastItem.remove();
  }, ERROR_TIMEOUT);
};

export {
  convertRatingToPercent,
  sortOffersByRating,
  sortOffersByPriceLowToHigh,
  sortOffersByPriceHighToLow,
  getRelevantSortingOffers,
  sortCities,
  errorToast
};

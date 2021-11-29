const ONE_HANGED_PERCENT = 100;
const MAX_STAR_QUANTITY = 5;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const sortOffersByRating = (offerA, offerB) => (offerB.rating - offerA.rating);
const sortOffersByPriceLowToHigh = (offerA, offerB) => (offerA.price - offerB.price);
const sortOffersByPriceHighToLow = (offerA, offerB) => (offerB.price - offerA.price);
const getRandomValue = (array) => array[getRandomNumber(0, array.length)];

const convertRatingToPercent = (rating) => {
  const integer = Math.round(rating);
  return integer * ONE_HANGED_PERCENT / MAX_STAR_QUANTITY + `%`;
};

const generateRandomArray = (array) => {
  const mixedArray = [...array].sort(() => Math.random() - 0.5);
  const randomArray = [];
  const randomNumber = getRandomNumber(1, mixedArray.length);
  for (let i = 0; i < randomNumber; i++) {
    const element = mixedArray[i];
    randomArray.push(element);
  }
  return randomArray;
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

export {
  convertRatingToPercent,
  getRandomNumber,
  generateRandomArray,
  sortOffersByRating,
  sortOffersByPriceLowToHigh,
  sortOffersByPriceHighToLow,
  getRandomValue,
  sortCities
};

import {nanoid} from "nanoid";
import dayjs from "dayjs";
import {getRandomNumber, generateRandomArray, getRandomValue} from "../utils/utils";

const DESCRIPTION = [
  `Contrary to popular belief, Lorem Ipsum is not simply random text.`,
  `It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.`,
  `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
  `Various versions have evolved over the years, sometimes by accident.`,
  `The standard chunk of Lorem Ipsum used since the 1500s.`,
];
const GOODS = [`Wi-fi`, `Heating`, `Kitchen`, `Cable TV`, `Washing machine`,
  `Coffee machine`, `Coffee machine`, `Dishwasher`, `Fridge`, `Towels`, `Baby seat`];
const OWNER_NAMES = [`Angelina`, `Vadim`, `Mark`, `Benjamin`, `Elena`, `Alex`];
const TYPE_NAMES = [`Apartment`, `Private Room`, `House`, `Hotel`];
const STATES = [true, false];
const AVATARS = [`img/avatar.svg`, `img/avatar-angelina.jpg`, `img/avatar-max.jpg`];
const PHOTO_ROOMS = [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`];
const LOCATIONS = [
  {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
  },
  {
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
  },
  {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
  },
  {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
  },
];

const CITIES_INFO = [
  {
    "location": {
      "latitude": 48.856663,
      "longitude": 2.351556,
      "zoom": 12
    },
    "name": `Paris`
  },
  {
    "location": {
      "latitude": 50.930779,
      "longitude": 6.938399,
      "zoom": 12
    },
    "name": `Cologne`
  },
  {
    "location": {
      "latitude": 50.854283,
      "longitude": 4.352131,
      "zoom": 12
    },
    "name": `Brussels`
  },
  {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 12
    },
    "name": `Amsterdam`
  },
  {
    "location": {
      "latitude": 53.550688,
      "longitude": 9.992895,
      "zoom": 12
    },
    "name": `Hamburg`
  },
  {
    "location": {
      "latitude": 51.230569,
      "longitude": 6.787428,
      "zoom": 12
    },
    "name": `Dusseldorf`
  },
];

const MIN_ROOM_QUANTITY = 1;
const MAX_ROOM_QUANTITY = 5;
const MIN_ADULT_QUANTITY = 2;
const MAX_ADULT_QUANTITY = 10;
const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const MAX_RATING = 5;

const getRandomRating = () => (Math.random() * MAX_RATING).toFixed(1);

const generateOffer = () => {
  const randomLocation = getRandomValue(LOCATIONS);
  return {
    "bedrooms": getRandomNumber(MIN_ROOM_QUANTITY, MAX_ROOM_QUANTITY),
    "city": getRandomValue(CITIES_INFO),
    "description": getRandomValue(DESCRIPTION),
    "goods": generateRandomArray(GOODS),
    "host": {
      "avatar_url": getRandomValue(AVATARS),
      "id": nanoid(),
      "is_pro": getRandomValue(STATES),
      "name": getRandomValue(OWNER_NAMES)
    },
    "id": nanoid(),
    "images": generateRandomArray(PHOTO_ROOMS),
    "is_favorite": getRandomValue(STATES),
    "is_premium": getRandomValue(STATES),
    "location": {
      "latitude": randomLocation.latitude,
      "longitude": randomLocation.longitude,
      "zoom": 8
    },
    "max_adults": getRandomNumber(MIN_ADULT_QUANTITY, MAX_ADULT_QUANTITY),
    "preview_image": getRandomValue(PHOTO_ROOMS),
    "price": getRandomNumber(MIN_PRICE, MAX_PRICE),
    "rating": getRandomRating(),
    "title": getRandomValue(DESCRIPTION).substring(0, 40) + `.`,
    "type": getRandomValue(TYPE_NAMES)
  };
};

const generateComment = () => {
  return {
    "comment": getRandomValue(DESCRIPTION),
    "date": dayjs().toDate(),
    "id": nanoid(),
    "rating": getRandomRating(),
    "user": {
      "avatar_url": getRandomValue(AVATARS),
      "id": nanoid(),
      "is_pro": getRandomValue(STATES),
      "name": getRandomValue(OWNER_NAMES)
    }
  };
};

const OFFER_QUANTITY = 15;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);

export {offers, generateComment};


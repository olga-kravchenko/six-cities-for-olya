import {nanoid} from "nanoid";
import dayjs from "dayjs";

const DESCRIPTION = [
  `Contrary to popular belief, Lorem Ipsum is not simply random text.`,
  `It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.`,
  `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
  `Various versions have evolved over the years, sometimes by accident.`,
  `The standard chunk of Lorem Ipsum used since the 1500s.`,
];
const GOODS = [`Wi-fi`, `Heating`, `Kitchen`, `"Cable TV`, `Washing machine`,
  `Coffee machine`, `Coffee machine`, `Dishwasher`, `Fridge`, `Towels`, `Baby seat`];
const CITIES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];
const NAMES = [`Angelina`, `Badim`, `Mark`, `Bengamin`, `Elena`, `Alex`];
const OFFER_TYPES = [`apartment`, `room`, `house`, `hotel`];
const TYPE_NAMES = [`Apartment`, `Private Room`, `House`, `Hotel`];
const STATES = [true, false];
const AVATARS = [`img/avatar.svg`, `img/avatar-angelina.jpg`, `img/avatar-max.jpg`];
const PHOTO_ROOMS = [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`];
const LOCATIONS = [
  {
    latitude: 52.370216,
    longitude: 4.895168,
  },
  {
    latitude: 52.355149,
    longitude: 4.673878,
  },
  {
    latitude: 52.359670,
    longitude: 4.666953,
  },
  {
    latitude: 52.369094,
    longitude: 4.647568,
  },
];

const MIN_ARRAY_QUANTITY = 0;
const MIN_ROOM_QUANTITY = 1;
const MAX_ROOM_QUANTITY = 5;
const MIN_ADULT_QUANTITY = 2;
const MAX_ADULT_QUANTITY = 10;
const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const MAX_RATING = 5;
const MAX_COMMENT_QUANTITY = 5;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomArray = (array) => {
  const randomArray = [];
  const randomNumber = getRandomNumber(1, array.length);
  for (let i = 0; i < randomNumber; i++) {
    const good = array[i];
    randomArray.push(good);
  }
  return randomArray;
};

const getRandomRating = () => {
  return (Math.random() * MAX_RATING).toFixed(1);
};

const generateOffer = () => {
  const randomLocation = LOCATIONS[getRandomNumber(MIN_ARRAY_QUANTITY, LOCATIONS.length)];
  return {
    "bedrooms": getRandomNumber(MIN_ROOM_QUANTITY, MAX_ROOM_QUANTITY),
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": CITIES[getRandomNumber(MIN_ARRAY_QUANTITY, CITIES.length)]
    },
    "description": DESCRIPTION[getRandomNumber(MIN_ARRAY_QUANTITY, DESCRIPTION.length)],
    "goods": generateRandomArray(GOODS),
    "host": {
      "avatar_url": AVATARS[getRandomNumber(MIN_ARRAY_QUANTITY, AVATARS.length)],
      "id": nanoid(),
      "is_pro": STATES[getRandomNumber(MIN_ARRAY_QUANTITY, STATES.length)],
      "name": NAMES[getRandomNumber(MIN_ARRAY_QUANTITY, NAMES.length)]
    },
    "id": nanoid(),
    "images": generateRandomArray(PHOTO_ROOMS),
    "is_favorite": STATES[getRandomNumber(MIN_ARRAY_QUANTITY, STATES.length)],
    "is_premium": STATES[getRandomNumber(MIN_ARRAY_QUANTITY, STATES.length)],
    "location": {
      "latitude": randomLocation.latitude,
      "longitude": randomLocation.longitude,
      "zoom": 8
    },
    "max_adults": getRandomNumber(MIN_ADULT_QUANTITY, MAX_ADULT_QUANTITY),
    "preview_image": PHOTO_ROOMS[getRandomNumber(MIN_ARRAY_QUANTITY, PHOTO_ROOMS.length)],
    "price": getRandomNumber(MIN_PRICE, MAX_PRICE),
    "rating": getRandomRating(),
    "title": DESCRIPTION[getRandomNumber(MIN_ARRAY_QUANTITY, DESCRIPTION.length)].substring(0, 40) + `.`,
    "type": TYPE_NAMES[getRandomNumber(MIN_ARRAY_QUANTITY, OFFER_TYPES.length)]
  };
};

const generateComment = () => {
  return {
    "comment": DESCRIPTION[getRandomNumber(MIN_ARRAY_QUANTITY, DESCRIPTION.length)],
    "date": dayjs().toDate(),
    "id": nanoid(),
    "rating": getRandomRating(),
    "user": {
      "avatar_url": AVATARS[getRandomNumber(MIN_ARRAY_QUANTITY, AVATARS.length)],
      "id": nanoid(),
      "is_pro": STATES[getRandomRating(MIN_ARRAY_QUANTITY, STATES.length)],
      "name": NAMES[getRandomNumber(MIN_ARRAY_QUANTITY, NAMES.length)]
    }
  };
};

const comments = new Array(getRandomNumber(MIN_ARRAY_QUANTITY, MAX_COMMENT_QUANTITY))
  .fill(null)
  .map(generateComment);

export {generateOffer, comments};


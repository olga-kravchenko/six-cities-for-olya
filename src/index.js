import React from "react";
import ReactDOM from 'react-dom';
import {generateOffer, comments} from "./mocks/offers";
import App from "./components/app/app";

const ROOM_QUANTITY = 5;
const offers = new Array(ROOM_QUANTITY).fill(null).map(generateOffer);
const place = {
  cities: `cities`,
  favorites: `favorites`
};
const logged = true;

ReactDOM.render(
    <App
      roomQuantity={ROOM_QUANTITY}
      offers={offers}
      comments={comments}
      place={place}
      logged={logged}
    />,
    document.querySelector(`#root`)
);

import React from "react";
import ReactDOM from 'react-dom';
import {generateOffer, comments} from "./mocks/offers";
import App from "./components/app/app";

const OFFER_QUANTITY = 5;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);
const place = {
  cities: `cities`,
  favorites: `favorites`
};
const isLogged = true;

ReactDOM.render(
    <App
      offerQuantity={OFFER_QUANTITY}
      offers={offers}
      comments={comments}
      place={place}
      isLogged={isLogged}
    />,
    document.querySelector(`#root`)
);

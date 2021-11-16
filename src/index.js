import React from "react";
import ReactDOM from 'react-dom';
import {generateOffer} from "./mocks/offers";
import App from "./components/app/app";

const OFFER_QUANTITY = 5;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);
const isLogged = true;

ReactDOM.render(
    <App
      offerQuantity={OFFER_QUANTITY}
      offers={offers}
      isLogged={isLogged}
    />,
    document.querySelector(`#root`)
);

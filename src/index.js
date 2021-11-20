import React from "react";
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {generateOffer} from "./mocks/offers";
import App from "./components/app/app";
import {reducer} from "./store/reducer";

const OFFER_QUANTITY = 5;
const offers = new Array(OFFER_QUANTITY).fill(null).map(generateOffer);
const isLogged = true;

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        offerQuantity={OFFER_QUANTITY}
        offers={offers}
        isLogged={isLogged}
      />
    </Provider>,
    document.querySelector(`#root`)
);

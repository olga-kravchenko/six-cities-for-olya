import React from "react";
import ReactDOM from 'react-dom';
import {offers, comments} from "./mocks/offers";
import App from "./components/app/app";

const Setting = {
  ROOM_QUANTITY: 5,
};

ReactDOM.render(
    <App
      roomQuantity={Setting.ROOM_QUANTITY}
      offers={offers}
      comments={comments}
    />,
    document.querySelector(`#root`)
);

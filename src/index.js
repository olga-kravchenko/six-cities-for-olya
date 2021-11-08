import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/app";

const Setting = {
  APARTMENT_QUANTITY: 6,
};

ReactDOM.render(
    <App apartmentQuantity={Setting.APARTMENT_QUANTITY}/>,
    document.querySelector(`#root`)
);

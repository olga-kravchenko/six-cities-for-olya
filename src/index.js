import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/app";

const Setting = {
  ROOM_QUANTITY: 5,
};

ReactDOM.render(
    <App roomQuantity={Setting.ROOM_QUANTITY}/>,
    document.querySelector(`#root`)
);

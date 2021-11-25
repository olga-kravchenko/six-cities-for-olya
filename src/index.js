import React from "react";
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CityNames} from "./constants";

const isLogged = true;
const store = createStore(reducer, composeWithDevTools());
const cityNames = Object.values(CityNames);

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cityNames}
        isLogged={isLogged}
      />
    </Provider>,
    document.querySelector(`#root`)
);

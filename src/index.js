import React from "react";
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./servises/api";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CityNames} from "./constants";
import {ActionCreator} from "./store/action";
import {checkAuthorization} from "./store/api-actions";
import {AuthorizationStatus} from "./constants";

const api = createAPI(() => {
  return store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
const cityNames = Object.values(CityNames);

store.dispatch(checkAuthorization());

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cityNames}
      />
    </Provider>,
    document.querySelector(`#root`)
);

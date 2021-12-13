import React from "react";
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createAxios from "./services/axios";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CityNames} from "./constants";
import {changeAuthStatus} from "./store/actions";
import {checkAuth} from "./store/axios-actions";
import {redirect} from "./store/middlewares/redirect";

const axiosApi = createAxios(() => store.dispatch(changeAuthStatus(false)));
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(axiosApi)),
        applyMiddleware(redirect)
    )
);
const cityNames = Object.values(CityNames);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App cities={cityNames}/>
    </Provider>,
    document.querySelector(`#root`)
);

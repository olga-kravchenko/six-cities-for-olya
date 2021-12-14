import React from "react";
import ReactDOM from 'react-dom';
import createAxios from "./services/axios";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/root-reducer";
import {CityNames} from "./constants";
import {changeAuthStatus} from "./store/actions";
import {checkAuth} from "./store/axios-actions";
import {redirect} from "./store/middlewares/redirect";
import {configureStore} from "@reduxjs/toolkit";

const axiosApi = createAxios(() => store.dispatch(changeAuthStatus(false)));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi
      },
    }).concat(redirect)
});
const cityNames = Object.values(CityNames);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App cities={cityNames}/>
    </Provider>,
    document.querySelector(`#root`)
);

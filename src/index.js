import React from "react";
import ReactDOM from 'react-dom';
import createAxios from "./services/axios";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/root-reducer";
import {changeAuthStatus} from "./store/actions/actions";
import {checkAuth} from "./store/actions/axios-actions";
import {redirect} from "./store/middlewares/redirect";
import {configureStore} from "@reduxjs/toolkit";
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";

const axiosApi = createAxios(() => store.dispatch(changeAuthStatus()));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);

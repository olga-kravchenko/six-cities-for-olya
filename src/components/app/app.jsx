import React from "react";
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "../../browser-history";
import {AppRoute} from "../../constants";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PrivateRoute from "../private-route/private-route";
import PageNotFound from "../page-not-found/page-not-found";

const App = ({cities}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main cities={cities}/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites cities={cities}/>}
        />
        <Route path={AppRoute.OFFER} exact>
          <Offer/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.array,
};

export default App;

import React from "react";
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import PageNotFound from "../page-not-found/page-not-found";
import Offer from "../offer/offer";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = ({offers, cities, authorizationStatus}) => {
  const favoriteOffers = offers.filter((offer) => offer.is_favorite);
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact>
          <Main
            offers={offers}
            cities={cities}
          />
        </Route>
        <Route
          path="/login"
          exact
          render={({history}) => (<Login onSubmitButtonClick={() => history.push(`/`)}/>)}
        />
        <PrivateRoute
          exact
          path="/favorites"
          authorizationStatus={authorizationStatus}
          render={() => <Favorites
            cities={cities}
            offers={favoriteOffers}
          />}
        />
        <Route path="/offer/:id" exact>
          <Offer
            offers={offers}
            onSubmitComment={() => {}}
          />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array,
  authorizationStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus
});

export {App};
export default connect(mapStateToProps, null)(App);

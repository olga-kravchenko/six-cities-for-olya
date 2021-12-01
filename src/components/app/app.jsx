import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import PageNotFound from "../page-not-found/page-not-found";
import Offer from "../offer/offer";

const App = ({offers, cities}) => {
  const favoriteOffers = offers.filter((offer) => offer.is_favorite);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            offers={offers}
            cities={cities}
          />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            cities={cities}
            offers={favoriteOffers}
          />
        </Route>
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
  cities: PropTypes.array
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {App};
export default connect(mapStateToProps, null)(App);

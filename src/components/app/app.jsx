import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../page-not-found/page-not-found";
import {connect} from "react-redux";

const App = ({offers, isLogged, cities}) => {
  const favoriteOffers = offers.filter((offer) => offer.is_favorite);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            cities={cities}
            isLogged={isLogged}
          />
        </Route>
        <Route path="/login" exact>
          <Login isLogged={isLogged}/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            cities={cities}
            offers={favoriteOffers}
            isLogged={isLogged}
          />
        </Route>
        <Route path="/offer/:id" exact>
          <Offer
            isLogged={isLogged}
            onSubmitComment={() => {}}
          />
        </Route>
        <Route>
          <PageNotFound isLogged={isLogged}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.array,
  isLogged: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps, null)(App);

import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import PageNotFound from "../page-not-found/page-not-found";
import Offer from "../offer/offer";

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
  offers: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  cities: PropTypes.array
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps, null)(App);

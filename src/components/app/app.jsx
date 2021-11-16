import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../404/404";

const App = (props) => {
  const {offerQuantity, offers, place: {cities, favorites}, isLogged} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            offerQuantity={offerQuantity}
            offers={offers}
            place={cities}
            isLogged={isLogged}
          />
        </Route>
        <Route path="/login" exact>
          <Login isLogged={isLogged}/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            offers={offers}
            place={favorites}
            isLogged={isLogged}
          />
        </Route>
        <Route path="/offer/:id" exact>
          <Offer
            offers={offers}
            place={cities}
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
  isLogged: PropTypes.bool.isRequired,
  offerQuantity: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  place: PropTypes.shape({
    cities: PropTypes.string.isRequired,
    favorites: PropTypes.string.isRequired
  })
};

export default App;

import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../404/404";

const App = (props) => {
  const {roomQuantity, offers, comments, place: {cities, favorites}} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            roomQuantity={roomQuantity}
            offers={offers}
            place={cities}
          />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            offers={offers}
            place={favorites}
          />
        </Route>
        <Route path="/offer/:id" offers={offers} comments={comments} exact>
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
  roomQuantity: PropTypes.number.isRequired,
  offers: PropTypes.array,
  comments: PropTypes.array,
  place: PropTypes.shape({
    cities: PropTypes.string,
    favorites: PropTypes.string
  })
};

export default App;

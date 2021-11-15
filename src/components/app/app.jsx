import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../404/404";

const App = (props) => {
  const {roomQuantity, offers, comments, place: {cities, favorites}, logged} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            roomQuantity={roomQuantity}
            offers={offers}
            place={cities}
            logged={logged}
          />
        </Route>
        <Route path="/login" exact>
          <Login logged={logged}/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            offers={offers}
            place={favorites}
            logged={logged}
          />
        </Route>
        <Route path="/offer/:id" exact>
          <Offer
            offers={offers}
            comments={comments}
            logged={logged}
            onSubmitComment={() => {}}
          />
        </Route>
        <Route>
          <PageNotFound logged={logged}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  roomQuantity: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  place: PropTypes.shape({
    cities: PropTypes.string.isRequired,
    favorites: PropTypes.string.isRequired
  }),
  logged: PropTypes.bool.isRequired
};

export default App;

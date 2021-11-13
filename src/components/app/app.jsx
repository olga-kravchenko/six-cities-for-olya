import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../404/404";

const App = (props) => {
  const {roomQuantity, offers, comments} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            roomQuantity={roomQuantity}
            offers={offers}
          />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route
          path="/favorites"
          offers={offers}
          exact>
          <Favorites/>
        </Route>
        <Route
          path="/offer/:id"
          offers={offers}
          comments={comments}
          exact>
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
};

export default App;

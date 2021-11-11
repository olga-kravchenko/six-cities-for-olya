import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../404/404";

const App = (props) => {
  const {roomQuantity} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main roomQuantity= {roomQuantity}/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/favorites" exact>
          <Favorites/>
        </Route>
        <Route path="/offer/:id" exact>
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
};

export default App;

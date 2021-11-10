import React from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PageNotFound from "../page-not-found/page-not-found";

const App = (props) => {
  const {roomQuantity} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main roomQuantity= {roomQuantity}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  roomQuantity: PropTypes.number.isRequired,
};

export default App;

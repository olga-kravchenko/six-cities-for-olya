import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from "../../store/user-data/selectors";

const PrivateRoute = ({render, path, exact, isAuth}) => (
  <Route path={path} exact={exact} render={
    (routeProps) => (isAuth ? render(routeProps) : <Redirect to={`/login`}/>)
  }
  />
);

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

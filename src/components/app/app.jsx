import React from "react";
import PropTypes from 'prop-types';
import Main from "../main/main";

const App = (props) => {
  const {roomQuantity} = props;
  return (
    <Main roomQuantity= {roomQuantity}/>
  );
};

App.propTypes = {
  roomQuantity: PropTypes.number.isRequired,
};

export default App;

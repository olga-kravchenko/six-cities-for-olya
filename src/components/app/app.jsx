import React from "react";
import PropTypes from 'prop-types';
import MainPage from "../main-page/main_page";

const App = (props) => {
  const {apartmentQuantity} = props;
  return (
    <MainPage apartmentQuantity= {apartmentQuantity}/>
  );
};

App.propTypes = {
  apartmentQuantity: PropTypes.number.isRequired,
};

export default App;

import React from "react";
import MainPage from "../main-page/main_page";

const App = (props) => {
  const {apartmentQuantity} = props;
  return (
    <MainPage apartmentQuantity= {apartmentQuantity}/>
  );
};

export default App;

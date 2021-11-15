import React from "react";
import Header from "../header/header";
import PropTypes from "prop-types";

const PageNotFound = ({isLogged}) => {
  return (
    <div className="page">
      <Header isLogged={isLogged}/>
      <main>
        <h1 style={{
          textAlign: `center`,
          padding: `127px`,
          fontStyle: `oblique`,
        }}>404 Page Not Found</h1>
      </main>
    </div>
  );
};

PageNotFound.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

export default PageNotFound;

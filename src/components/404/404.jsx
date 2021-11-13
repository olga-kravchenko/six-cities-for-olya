import React from "react";
import Header from "../header/header";
import PropTypes from "prop-types";

const PageNotFound = ({logged}) => {
  return (
    <div className="page">
      <Header logged={logged}/>
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
  logged: PropTypes.bool
};

export default PageNotFound;

import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import HeaderSignIn from "../header-sign-in/header-sign-in";
import HeaderMail from "../header-mail/header-mail";

const PageNotFound = ({isLogged}) => {
  return (
    <div className="page">
      <Header render={() => (isLogged ? <HeaderMail/> : <HeaderSignIn/>)}/>
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

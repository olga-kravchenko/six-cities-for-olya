import React from "react";
import HeaderMail from "../header-mail/header-mail";
import HeaderSignIn from "../header-sign-in/header-sign-in";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({logged}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {logged ? <HeaderMail/> : <HeaderSignIn/>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired
};

export default Header;

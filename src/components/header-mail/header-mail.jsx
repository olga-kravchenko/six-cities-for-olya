import React from "react";
import {Link} from "react-router-dom";

const HeaderMail = () => {
  return (
    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
    </Link>
  );
};

export default HeaderMail;

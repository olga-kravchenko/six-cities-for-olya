import React, {memo} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/axios-actions";
import {AppRoute} from "../../constants";

const Header = () => {
  const {isAuth} = useSelector((state) => state.USER);
  const {userInfo} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

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
                {isAuth ?
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userInfo.avatar_url})`}}>
                    </div>
                    <span className="header__user-name user__name">{userInfo.email}</span>
                  </Link> :
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                }
                {isAuth ?
                  <a onClick={(authData) => dispatch(logout(authData))}>
                    <p>Выход</p>
                  </a> :
                  ``}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);

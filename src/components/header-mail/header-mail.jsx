import React from "react";
import {Link} from "react-router-dom";
import {logout} from "../../store/axios-actions";
import {useSelector, useDispatch} from "react-redux";

const HeaderMail = () => {
  const {userInfo} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  return (
    <>
      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userInfo.avatar_url})`}}>
        </div>
        <span className="header__user-name user__name">{userInfo.email}</span>
      </Link>
      <a onClick={(authData) => dispatch(logout(authData))}>
        <p>Выход</p>
      </a>
    </>);
};

export default HeaderMail;

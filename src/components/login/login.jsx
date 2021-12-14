import React, {useRef} from "react";
import Header from "../header/header";
import PropTypes from "prop-types";
import {login} from "../../store/axios-actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../constants";

const Login = ({onSubmitForm, isAuth}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  if (isAuth) {
    return (<Redirect to={AppRoute.FAVORITES}/>);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""/>
              </div>
              <button
                className="login__submit form__submit button"
                type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const mapStateToProps = ({USER}) => ({
  isAuth: USER.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm(authData) {
    dispatch(login(authData));
  }
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

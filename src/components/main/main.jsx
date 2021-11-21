import React from "react";
import PropTypes from 'prop-types';
import Header from "../header/header";
import Offers from "../offers/offers";
import Map from "../map/map";
import HeaderSignIn from "../header-sign-in/header-sign-in";
import HeaderMail from "../header-mail/header-mail";
import Cities from "../cities/cities";
import {connect} from "react-redux";

const Main = ({city, offerList, isLogged}) => {
  const CITY_NAMES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
  const cityInfo = offerList.find((e) => e.city.location).city;

  return (
    <div className="page page--gray page--main">
      <Header render={() => (isLogged ? <HeaderMail/> : <HeaderSignIn/>)}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities cities={CITY_NAMES}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerList.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <Offers pageType="cities" offers={offerList}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cityInfo={cityInfo} offerList={offerList} style={{height: `100%`}}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offerQuantity: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  offerList: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  offerList: state.offerList,
  city: state.city
});

export default connect(mapStateToProps)(Main);

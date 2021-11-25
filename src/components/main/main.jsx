import React from "react";
import PropTypes from 'prop-types';
import Header from "../header/header";
import Offers from "../offers/offers";
import Map from "../map/map";
import HeaderSignIn from "../header-sign-in/header-sign-in";
import HeaderMail from "../header-mail/header-mail";
import Cities from "../cities/cities";
import {connect} from "react-redux";
import EmptyMain from "../empty-main/empty-main";
import SortingTypes from "../sorting-types/sorting-types";

const Main = ({city, offerList, isLogged, cities}) => {
  const noOffers = !offerList.length ? `page__main--index-empty` : ``;

  return (
    <div className="page page--gray page--main">
      <Header render={() => (isLogged ? <HeaderMail/> : <HeaderSignIn/>)}/>

      <main className={`page__main page__main--index ${noOffers}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities cities={cities}/>
          </section>
        </div>
        {offerList.length ? <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerList.length} places to stay in {city}</b>
              <SortingTypes />
              <Offers pageType="cities" offers={offerList}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offerList={offerList} style={{height: `100%`}}/>
              </section>
            </div>
          </div>
        </div> :
          <EmptyMain/>}
      </main>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.array,
  city: PropTypes.string.isRequired,
  offerList: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  offerList: state.offerList,
  city: state.city
});

export {Main};
export default connect(mapStateToProps, null)(Main);

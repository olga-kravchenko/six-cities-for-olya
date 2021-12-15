import React, {useEffect} from "react";
import {fetchOffers} from "../../store/axios-actions";
import SortingTypes from "../sorting-types/sorting-types";
import Header from "../header/header";
import Offers from "../offers/offers";
import Map from "../map/map";
import Cities from "../cities/cities";
import EmptyMain from "../empty-main/empty-main";
import Spinner from "../spinner/spinner";
import {resetFavorite} from "../../store/actions";
import {useSelector, useDispatch} from "react-redux";


const Main = () => {
  const {offers, isOffersLoaded} = useSelector((state) => state.OFFERS);
  const {city} = useSelector((state) => state.CITY);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(resetFavorite());
  }, []);

  const componentEmptyOrSpinner = isOffersLoaded ? <EmptyMain/> : <Spinner/>;
  const filteredOffers = [...offers.filter((e) => e.city.name === city)];
  const noOffers = !filteredOffers.length ? `page__main--index-empty` : ``;

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${noOffers}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities/>
          </section>
        </div>
        {!filteredOffers.length ?
          componentEmptyOrSpinner :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                <SortingTypes/>
                <Offers pageType="cities" offers={filteredOffers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offerList={filteredOffers} style={{height: `100%`}}/>
                </section>
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
};

export default Main;

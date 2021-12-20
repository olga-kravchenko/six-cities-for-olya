import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import Header from "../header/header";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import OfferCard from "../offer-card/offer-card";
import {fetchFavoriteOffers} from "../../store/axios-actions";
import Spinner from "../spinner/spinner";
import {useSelector, useDispatch} from "react-redux";
import {CityNames} from "../../constants";

const sortCities = (offers, cities) => {
  const citiesByFavoriteOffers = offers.map((e) => e.city.name);
  const uniqueCities = [...new Set(citiesByFavoriteOffers)];
  const sortedCities = [];
  cities.forEach((city) => {
    const newCity = uniqueCities.find((e) => e === city);
    if (newCity) {
      sortedCities.push(newCity);
    }
  });
  return sortedCities;
};

const Favorites = () => {
  const dispatch = useDispatch();
  const {favoriteOffers, isFavoritesLoaded} = useSelector((state) => state.FAVORITES);
  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(fetchFavoriteOffers());
    }
  }, []);

  const cities = Object.values(CityNames);
  const isNoOffers = favoriteOffers.length === 0;
  const citiesNames = sortCities(favoriteOffers, cities);

  if (!isFavoritesLoaded) {
    return (<Spinner/>);
  }

  return (
    <div className="page">
      <Header/>
      {isNoOffers ?
        <FavoritesEmpty/> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {citiesNames.map((city, i) => {
                  const filteringOffers = favoriteOffers.filter((e) => e.city.name === city);
                  return (
                    <li className="favorites__locations-items" key={i}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {filteringOffers.map((offer, y) => <OfferCard key={y} offer={offer} pageType="favorites"/>)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

export default Favorites;

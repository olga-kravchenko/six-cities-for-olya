import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {sortCities} from "../../utils/utils";
import Header from "../header/header";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import OfferCard from "../offer-card/offer-card";
import {fetchFavoriteOffers} from "../../store/axios-actions";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";

const Favorites = ({cities, favoriteOffers, isFavoritesLoaded, onLoadFavorites}) => {
  useEffect(() => {
    if (!isFavoritesLoaded) {
      onLoadFavorites();
    }
  }, [isFavoritesLoaded]);

  if (!isFavoritesLoaded) {
    return (
      <Spinner/>
    );
  }

  const isNoOffers = favoriteOffers.length === 0;
  const citiesNames = sortCities(favoriteOffers, cities);

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
        </main>
      }

      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  cities: PropTypes.array,
  favoriteOffers: PropTypes.array.isRequired,
  isFavoritesLoaded: PropTypes.bool,
  onLoadFavorites: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isFavoritesLoaded: state.isFavoritesLoaded,
  favoriteOffers: state.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoriteOffers());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

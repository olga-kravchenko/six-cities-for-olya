import React from "react";
import {Link} from 'react-router-dom';
import Header from "../header/header";
import PropTypes from "prop-types";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import OfferCard from "../offer-card/offer-card";

const Favorites = ({offers, place, logged}) => {
  const favoriteOffers = offers.filter((offer) => offer.is_favorite);
  const isEmptyOffers = favoriteOffers.length === 0;
  return (
    <div className="page">
      <Header logged={logged}/>
      {isEmptyOffers ?
        <FavoritesEmpty/> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.map((offer, i) => <OfferCard key = {i} offer = {offer} place={place}/>)}
                  </div>
                </li>
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
  offers: PropTypes.array,
  place: PropTypes.string,
  logged: PropTypes.bool
};

export default Favorites;

import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {fetchOffers} from "../../store/axios-actions";
import SortingTypes from "../sorting-types/sorting-types";
import Header from "../header/header";
import Offers from "../offers/offers";
import Map from "../map/map";
import Cities from "../cities/cities";
import EmptyMain from "../empty-main/empty-main";
import Spinner from "../spinner/spinner";
import {SortingType} from "../../constants";
import {resetFavorite} from "../../store/actions";
import {useSelector, useDispatch} from "react-redux";

const getRelevantSortingOffers = (sortingType, offers, city) => {
  let sortingCallback = null;
  switch (sortingType) {
    case SortingType.PRICE_LOW_TO_HIGH:
      sortingCallback = (firstOffer, secondOffer) => (firstOffer.price - secondOffer.price);
      break;
    case SortingType.PRICE_HIGH_TO_LOW:
      sortingCallback = (firstOffer, secondOffer) => (secondOffer.price - firstOffer.price);
      break;
    case SortingType.TOP_RATED_FIRST:
      sortingCallback = (firstOffer, secondOffer) => (secondOffer.rating - firstOffer.rating);
      break;
  }
  const filteredOffers = [...offers.filter((e) => e.city.name === city)];
  return sortingCallback ? filteredOffers.sort(sortingCallback) : filteredOffers;
};

const Main = ({cities}) => {
  const {city, offers, sortingType, isOffersLoaded} = useSelector((state) => state.MAIN);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(resetFavorite());
  }, []);

  const componentEmptyOrSpinner = isOffersLoaded ? <EmptyMain/> : <Spinner/>;
  const offerList = getRelevantSortingOffers(sortingType, offers, city);
  const noOffers = !offerList.length ? `page__main--index-empty` : ``;

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${noOffers}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities cities={cities}/>
          </section>
        </div>
        {!offerList.length ?
          componentEmptyOrSpinner :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offerList.length} places to stay in {city}</b>
                <SortingTypes/>
                <Offers pageType="cities" offers={offerList}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offerList={offerList} style={{height: `100%`}}/>
                </section>
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
};

Main.propTypes = {
  cities: PropTypes.array,
};

export {Main};
export default Main;

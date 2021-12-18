import React, {memo} from "react";
import {changeCity, closePopup, resetSortingType} from "../../store/actions";
import {useSelector, useDispatch} from "react-redux";
import {CityNames, DEFAULT_SORTING_TYPE} from "../../constants";

const Cities = () => {
  const cities = Object.values(CityNames);
  const {city} = useSelector((state) => state.CITY);
  const {sortingType} = useSelector((state) => state.SORTING_TYPE);
  const {isOpenSortingPopup} = useSelector((state) => state.POPUP);
  const dispatch = useDispatch();

  const onCityClick = (evt) => {
    evt.preventDefault();
    const cityName = evt.target.textContent;
    if (document.querySelector(`.cities__places`)) {
      document.querySelector(`.cities__places`).scrollTo(0, 0);
    }
    dispatch(changeCity(cityName));
    if (sortingType !== DEFAULT_SORTING_TYPE) {
      dispatch(resetSortingType());
    }
    if (isOpenSortingPopup) {
      dispatch(closePopup());
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((cityName, i) => {
        const activeCity = city === cityName ? `tabs__item--active` : ``;
        return (
          <li className="locations__item" key={i}>
            <a className={`locations__item-link tabs__item ${activeCity}`} onClick={onCityClick}>
              <span>{cityName}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Cities);

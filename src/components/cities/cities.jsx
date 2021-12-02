import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const Cities = ({cities, onCityClick, city}) => {
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

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func,
  city: PropTypes.string,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt) {
    evt.preventDefault();
    document.querySelector(`.cities__places`).scrollTo(0, 0);
    const cityName = evt.target.textContent;
    dispatch(ActionCreator.changeCity(cityName));
    dispatch(ActionCreator.resetSortingType());
  },
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);

import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const Cities = ({cities, onCityClick, city}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((cityName, i) => {
        const isCityActive = city === cityName ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`;
        return (
          <li className="locations__item" key={i}>
            <a className={isCityActive} href="#"
              onClick={onCityClick}>
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
  city: PropTypes.string,
  onCityClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt) {
    evt.preventDefault();
    const cityName = evt.target.textContent;
    dispatch(ActionCreator.changeCity(cityName));
    dispatch(ActionCreator.fillWithOffers());
    dispatch(ActionCreator.changeSortingType());
  },
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);

import React from "react";
import PropTypes from "prop-types";

const Cities = ({cities}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => <li className="locations__item" key={i}>
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>)}
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active">
          <span>Amsterdam</span>
        </a>
      </li>
    </ul>
  );
};

Cities.propTypes = {
  cities: PropTypes.array.isRequired
};

export default Cities;

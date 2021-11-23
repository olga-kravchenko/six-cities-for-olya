import React from "react";
import PropTypes from "prop-types";

const SortingOptions = () => {
  const types = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {types.map((type, i) => {
          const isActiveSorting = type === `Popular` ? `places__option places__option--active` : `places__option`;
          return (
            <li className={isActiveSorting} tabIndex="0" key={i}>
              {type}
            </li>);
        })}
      </ul>
    </form>
  );
};
SortingOptions.propTypes = {
  sorting: PropTypes.string,
  onSortingClick: PropTypes.func,
};

export default SortingOptions;

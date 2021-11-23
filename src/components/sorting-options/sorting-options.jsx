import React from "react";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const SortingOptions = ({sorting, onSortingClick}) => {
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
          const isActiveSorting = sorting === type ? `places__option places__option--active` : `places__option`;
          return (
            <li className={isActiveSorting} tabIndex="0" key={i} onClick={onSortingClick}>
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

const mapStateToProps = (state) => ({
  sorting: state.sorting,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingClick(evt) {
    evt.preventDefault();
    const type = evt.target.textContent;
    dispatch(ActionCreator.changeSorting(type));
  },
});

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);

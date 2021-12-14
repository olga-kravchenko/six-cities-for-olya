import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeSortingType, openPopup} from "../../store/actions";
import {SortingType} from "../../constants";
import {getOpenSortingPopupStatus, getSortingType} from "../../store/main-data/selectors";

const SortingTypes = ({sortingType, onSortingTypeClick, isOpenSortingPopup, onSortingPopupClick}) => {
  const types = Object.values(SortingType);
  const openSortingPopUp = isOpenSortingPopup ? `places__options--opened` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onSortingPopupClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openSortingPopUp}`}>
        {types.map((type, i) => {
          const activeSortingType = type === sortingType ? `places__option--active` : ``;
          return (
            <li className={`places__option ${activeSortingType}`} tabIndex="0" key={i} onClick={onSortingTypeClick}>
              {type}
            </li>);
        })}
      </ul>
    </form>
  );
};
SortingTypes.propTypes = {
  sortingType: PropTypes.string,
  onSortingTypeClick: PropTypes.func,
  isOpenSortingPopup: PropTypes.bool,
  onSortingPopupClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sortingType: getSortingType(state),
  isOpenSortingPopup: getOpenSortingPopupStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSortingTypeClick(evt) {
    evt.preventDefault();
    const sortingType = evt.target.textContent;
    dispatch(changeSortingType(sortingType));
  },
  onSortingPopupClick() {
    dispatch(openPopup());
  }
});

export {SortingTypes};
export default connect(mapStateToProps, mapDispatchToProps)(SortingTypes);

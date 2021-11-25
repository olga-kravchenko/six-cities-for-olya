import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {SortingType} from "../../constants";

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
          const isActiveSortingType = type === sortingType ? `places__option places__option--active` : `places__option`;
          return (
            <li className={isActiveSortingType} tabIndex="0" key={i} onClick={onSortingTypeClick}>
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
  onSortingPopupClick: PropTypes.func,
  isOpenSortingPopup: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
  isOpenSortingPopup: state.isOpenSortingPopup
});

const mapDispatchToProps = (dispatch) => ({
  onSortingTypeClick(evt) {
    evt.preventDefault();
    const sortingType = evt.target.textContent;
    dispatch(ActionCreator.changeSortingType(sortingType));
    dispatch(ActionCreator.fillWithOffers(sortingType));
  },
  onSortingPopupClick() {
    dispatch(ActionCreator.openPopup());
  }
});

export {SortingTypes};
export default connect(mapStateToProps, mapDispatchToProps)(SortingTypes);

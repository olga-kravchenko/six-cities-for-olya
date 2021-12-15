import React, {memo} from "react";
import {changeSortingType, openPopup} from "../../store/actions";
import {SortingType} from "../../constants";
import {useSelector, useDispatch} from "react-redux";

const SortingTypes = () => {
  const {sortingType, isOpenSortingPopup} = useSelector((state) => state.SORTING);
  const dispatch = useDispatch();
  const types = Object.values(SortingType);
  const openSortingPopUp = isOpenSortingPopup ? `places__options--opened` : ``;

  const onSortingTypeClick = (evt) => {
    evt.preventDefault();
    dispatch(changeSortingType(evt.target.textContent));
  };

  const onSortingPopupClick = () => {
    dispatch(openPopup());
  };

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

export default memo(SortingTypes);

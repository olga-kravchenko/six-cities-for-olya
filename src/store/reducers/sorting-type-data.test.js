import {initialState, sortingTypeData} from "./sorting-type-data";
import {changeSortingType, resetSortingType} from "../actions/actions";

describe(`Reducer 'sortingTypeData' work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(sortingTypeData(undefined, {})).toEqual({...initialState});
  });

  it(`Reducer must change the value of the sortingType.`, () => {
    const expectedNewSortingType = `SortingType`;
    expect(sortingTypeData(initialState, changeSortingType(expectedNewSortingType)))
      .toEqual({...initialState, sortingType: expectedNewSortingType});
  });

  it(`Reducer must reset sortingType to initialState.`, () => {
    const expectedChosenSortingType = `SortingType`;
    const state = {sortingType: expectedChosenSortingType};
    expect(sortingTypeData(state, resetSortingType()))
      .toEqual({...state, ...initialState});
  });
});

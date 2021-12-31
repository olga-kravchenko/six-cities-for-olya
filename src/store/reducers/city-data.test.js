import {initialState, cityData} from "./city-data";
import {changeCity} from "../actions/actions";

describe(`Reducer 'cityData' work correctly.`, () => {
  it(`Reducer without additional parameters should return initial state.`, () => {
    expect(cityData(undefined, {}))
      .toEqual({...initialState});
  });

  it(`Reducer must change the value of the city.`, () => {
    const expectedCity = `CityName`;
    const state = {city: `chosenCity`};
    expect(cityData(initialState, changeCity(expectedCity)))
      .toEqual({...initialState, city: expectedCity});
    expect(cityData(state, changeCity(expectedCity)))
      .toEqual({...state, city: expectedCity});
  });
});

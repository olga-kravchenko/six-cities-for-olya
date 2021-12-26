import React from "react";
import {render} from "@testing-library/react";
import FavoritesEmpty from "./favorites-empty";

it(`FavoritesEmpty should render correctly`, () => {
  const {getByText} = render(<FavoritesEmpty/>);
  const paragraphElement = getByText(`Nothing yet saved.`);
  const textElement = getByText(`Save properties to narrow down search or plan your future trips.`);
  expect(paragraphElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
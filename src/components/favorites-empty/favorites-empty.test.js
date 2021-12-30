import React from "react";
import {render, screen} from "@testing-library/react";
import FavoritesEmpty from "./favorites-empty";

it(`FavoritesEmpty should render correctly`, () => {
  render(<FavoritesEmpty/>);
  expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
});

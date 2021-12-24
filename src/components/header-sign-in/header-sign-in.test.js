import React from "react";
import {render} from "@testing-library/react";
import HeaderSignIn from "./header-sign-in";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

it(`FavoritesEmpty should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <HeaderSignIn/>
      </Router>
  );
  const paragraphElement = getByText(`Sign in`);
  expect(paragraphElement).toBeInTheDocument();
});

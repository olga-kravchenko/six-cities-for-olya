import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Review from "./review";


it(`Review should render correctly on Main page`, () => {
  const mockStore = configureStore({});
  const extendedComment = {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  };
  render(
      <Provider store={mockStore({})}>
        <Review comment={extendedComment}/>
      </Provider>);

  expect(screen.getByText(/Max/i)).toBeInTheDocument();
  expect(screen.getByText(/A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam./i)).toBeInTheDocument();
});

import browserHistory from "../../browser-history";

const redirect = (_store) => (next) => (action) => {
  if (action.type === `redirect/redirectToRoute`) {
    browserHistory.push(action.payload);
  }
  return next(action);
};

export {redirect};

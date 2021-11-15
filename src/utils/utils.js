const ONE_HANGED_PERCENT = 100;
const MAX_STAR_QUANTITY = 5;

const convertRatingToPercent = (rating) => {
  const integer = Math.round(rating);
  return integer * ONE_HANGED_PERCENT / MAX_STAR_QUANTITY + `%`;
};

export {convertRatingToPercent};

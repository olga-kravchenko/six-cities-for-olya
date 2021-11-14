const convertRatingToPercent = (rating) => {
  const integer = Math.round(rating);
  return integer * 100 / 5 + `%`;
};

export {convertRatingToPercent};

const MAX_STAR_QUANTITY = 5;

const convertRatingToPercent = (rating) => `${Math.round(rating) * 100 / MAX_STAR_QUANTITY}%`;

export {convertRatingToPercent};

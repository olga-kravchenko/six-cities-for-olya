const MAX_STAR_QUANTITY = 5;

const convertRatingToPercent = (rating) => `${Math.round(rating) * 100 / MAX_STAR_QUANTITY}%`;

const replaceElement = (offers, element) => {
  const index = offers.findIndex((offer) => offer.id === element.id);
  if (index !== -1) {
    offers[index] = element;
  }
  return offers;
};

const addElement = (offers, element) => {
  offers.push(element);
  return offers;
};

const removeElement = (offers, element) => {
  const index = offers.findIndex((offer) => offer.id === element.id);
  if (index > -1) {
    offers.splice(index, 1);
  }
  return offers;
};

export {convertRatingToPercent, replaceElement, addElement, removeElement};

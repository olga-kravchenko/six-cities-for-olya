import {convertRatingToPercent, replaceElement, addElement, removeElement} from "./utils";

describe(`Test convertRatingToPercent().`, () => {
  it(`Should return a correctly converted percent.`, () => {
    const expectedRating = 4.4;
    const expectedConvertedRating = `80%`;
    expect(convertRatingToPercent(expectedRating)).toEqual(expectedConvertedRating);
  });
});

describe(`Test replaceElement().`, () => {
  it(`Should return an updated array with the replaced element.`, () => {
    const offers = [
      {
        "id": 1,
        "is_favorite": false,
      },
      {
        "id": 2,
        "is_favorite": false,
      },
      {
        "id": 3,
        "is_favorite": false,
      },
      {
        "id": 4,
        "is_favorite": false,
      },
    ];
    const expectedElement = {
      "id": 1,
      "is_favorite": true,
    };
    const expectedOffers = [
      {
        "id": 1,
        "is_favorite": true,
      },
      {
        "id": 2,
        "is_favorite": false,
      },
      {
        "id": 3,
        "is_favorite": false,
      },
      {
        "id": 4,
        "is_favorite": false,
      },
    ];
    expect(replaceElement(offers, expectedElement)).toEqual(expectedOffers);
  });
});

describe(`Test addElement().`, () => {
  it(`Should return an updated array with the added element.`, () => {
    const offers = [
      {
        "id": 1,
        "is_favorite": true,
      },
      {
        "id": 2,
        "is_favorite": true,
      },
      {
        "id": 3,
        "is_favorite": true,
      },
    ];
    const expectedElement = {
      "id": 4,
      "is_favorite": true,
    };
    const expectedOffers = [
      {
        "id": 1,
        "is_favorite": true,
      },
      {
        "id": 2,
        "is_favorite": true,
      },
      {
        "id": 3,
        "is_favorite": true,
      },
      {
        "id": 4,
        "is_favorite": true,
      },
    ];
    expect(addElement(offers, expectedElement)).toEqual(expectedOffers);
  });
});

describe(`Test removeElement().`, () => {
  it(`Should return an updated array with the deleted element.`, () => {
    const offers = [
      {
        "id": 1,
        "is_favorite": true,
      },
      {
        "id": 2,
        "is_favorite": true,
      },
      {
        "id": 3,
        "is_favorite": true,
      },
      {
        "id": 4,
        "is_favorite": true,
      },
    ];
    const expectedElement = {
      "id": 3,
      "is_favorite": false,
    };
    const expectedOffers = [
      {
        "id": 1,
        "is_favorite": true,
      },
      {
        "id": 2,
        "is_favorite": true,
      },
      {
        "id": 4,
        "is_favorite": true,
      },
    ];
    expect(removeElement(offers, expectedElement)).toEqual(expectedOffers);
  });
});

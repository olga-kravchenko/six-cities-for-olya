import {convertRatingToPercent, replaceElement, addElement, removeElement} from "./utils";

describe(`Test convertRatingToPercent()`, () => {
  it(`Should be return rightly converted percent`, () => {
    const expectedRating = 4.4;
    const expectedConvertedRating = `80%`;
    expect(convertRatingToPercent(expectedRating)).toEqual(expectedConvertedRating);
  });
});

describe(`Test replaceElement()`, () => {
  it(`Should be return updated offers`, () => {
    const offers = [
      {
        "id": 1,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 2,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 3,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 4,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
    ];
    const expectedElement = {
      "id": 1,
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Paris`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": true,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    };
    const expectedOffers = [
      {
        "id": 1,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": true,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 2,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 3,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 4,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
    ];
    expect(replaceElement(offers, expectedElement)).toEqual(expectedOffers);
  });
});

describe(`Test addElement()`, () => {
  it(`Should be return 'true' when answer is correct`, () => {
    const offers = [
      {
        "id": 2,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 3,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 4,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
    ];
    const expectedElement = {
      "id": 1,
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Paris`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": true,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    };
    const expectedOffers = [
      {
        "id": 2,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 3,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 4,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 1,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": true,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      }
    ];
    expect(addElement(offers, expectedElement)).toEqual(expectedOffers);
  });
});

describe(`Test removeElement()`, () => {
  it(`Should be return 'true' when answer is correct`, () => {
    const offers = [
      {
        "id": 1,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": true,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 2,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 3,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 4,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
    ];
    const expectedElement = {
      "id": 1,
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Paris`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": true,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    };
    const expectedOffers = [
      {
        "id": 2,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 3,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "id": 4,
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
    ];
    expect(removeElement(offers, expectedElement)).toEqual(expectedOffers);
  });
});

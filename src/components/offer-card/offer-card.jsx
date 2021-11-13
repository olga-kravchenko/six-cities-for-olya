import React from "react";
import PropTypes from "prop-types";

const OfferCard = ({offer, place}) => {
  const {price, title, type, preview_image, id, is_favorite} = offer;
  const isCities = place === `cities` ? `${place}__place-card` : `${place}__card`;
  const isCitiesImageWidth = place === `cities` ? `260` : `150`;
  const isCitiesImageHeight = place === `cities` ? `200` : `110`;
  const isFavorites = place === `favorites` ? `favorites__card-info place-card__info` : `place-card__info`;
  const isCitiesStarsWidth = place === `cities` ? `80%` : `100%`;

  return (
    <article className={`${isCities} place-card`} id={id}>
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={preview_image} width={isCitiesImageWidth} height={isCitiesImageHeight} alt="Place image"/>
        </a>
      </div>
      <div className={isFavorites}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              is_favorite ?
                `place-card__bookmark-button place-card__bookmark-button--active button` :
                `place-card__bookmark-button button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${isCitiesStarsWidth}`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    preview_image: PropTypes.string,
    id: PropTypes.string,
    is_favorite: PropTypes.bool
  }),
  place: PropTypes.string
};

export default OfferCard;

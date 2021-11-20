import React from "react";
import PropTypes from "prop-types";
import OfferProp from "../offer/offer.prop";
import {useHistory} from "react-router-dom";
import {convertRatingToPercent} from "../../utils/utils";

const OfferCard = ({offer, pageType}) => {
  const {price, title, type, preview_image, id, is_favorite, rating} = offer;
  const isCitiesPage = pageType === `cities` ? `cities__place-card` : `near-places__card`;
  const isFavoritesPage = pageType === `favorites` ? `favorites__card` : isCitiesPage;
  const isFavoritesImageWidth = pageType === `favorites` ? `150` : `260`;
  const isFavoritesImageHeight = pageType === `favorites` ? `110` : `200`;
  const isFavorites = pageType === `favorites` ? `favorites__card-info place-card__info` : `place-card__info`;
  const percent = convertRatingToPercent(rating);
  const history = useHistory();
  const pathToOffer = `/offer/${id}`;

  const onTitleClick = (evt) => {
    evt.preventDefault();
    history.push(pathToOffer);
    window.scrollTo(0, 0);
  };

  return (
    <article className={`${isFavoritesPage} place-card`} id={id}>
      <div className={`${pageType}__image-wrapper place-card__image-wrapper`}>
        <a>
          <img className="place-card__image" src={preview_image} width={isFavoritesImageWidth} height={isFavoritesImageHeight}
            alt="Place image"/>
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
            <span style={{width: `${percent}`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={onTitleClick} href={pathToOffer}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: OfferProp,
  pageType: PropTypes.string.isRequired
};

export default OfferCard;

import React from "react";
import PropTypes from "prop-types";
import OfferProp from "../offer/offer.prop";
import {useHistory} from "react-router-dom";
import {convertRatingToPercent} from "../../utils/utils";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const OfferCardFavorites = ({offer, onFavoriteOfferTitleClick}) => {
  const {price, title, type, preview_image, id, is_favorite, rating} = offer;
  const percent = convertRatingToPercent(rating);
  const history = useHistory();
  const pathToOffer = `/offer/${id}`;
  const favoriteOffer = is_favorite ? `place-card__bookmark-button--active` : ``;

  const onTitleClick = (evt) => {
    evt.preventDefault();
    history.push(pathToOffer);
    window.scrollTo(0, 0);
    onFavoriteOfferTitleClick(offer.city.name);
  };

  return (
    <article className="favorites__card place-card" id={id}>
      <div className={`favorites__image-wrapper place-card__image-wrapper`}>
        <a>
          <img className="place-card__image" src={preview_image} width="150"
            height="110"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info favorites__card-info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favoriteOffer}`} type="button">
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

OfferCardFavorites.propTypes = {
  offer: OfferProp,
  pageType: PropTypes.string.isRequired,
  onFavoriteOfferTitleClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteOfferTitleClick(typeCity) {
    dispatch(ActionCreator.changeCity(typeCity));
    dispatch(ActionCreator.findRelevantOffers());
    dispatch(ActionCreator.resetCity());
    dispatch(ActionCreator.resetSortingType());
  },
});

export {OfferCardFavorites};
export default connect(null, mapDispatchToProps)(OfferCardFavorites);

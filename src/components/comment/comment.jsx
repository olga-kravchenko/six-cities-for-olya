import React from "react";
import PropTypes from "prop-types";
import {convertRatingToPercent} from "../../utils/utils";

const Comment = ({comment}) => {
  const {comment: text, date, id, rating, user: {avatar_url, is_pro, name}} = comment;
  const percent = convertRatingToPercent(rating);

  return (
    <li className="reviews__item" id={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar_url} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${percent}`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.object,
    id: PropTypes.string,
    rating: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      is_pro: PropTypes.bool,
      name: PropTypes.string
    })
  })
};

export default Comment;

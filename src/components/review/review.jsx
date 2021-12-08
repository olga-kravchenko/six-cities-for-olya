import React from "react";
import ReviewProp from "./reviewProp";
import dayjs from "dayjs";
import {convertRatingToPercent} from "../../utils/utils";

const Review = (props) => {
  const {comment: text, date, id, rating, user: {avatar_url, name}} = props.comment;
  const formattedDateForUser = dayjs(date).format(`MMMM YYYY`);
  const formattedDateForAttribute = dayjs(date).format(`YYYY-MM-DD`);
  const ratingPercent = convertRatingToPercent(rating);

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
            <span style={{width: `${ratingPercent}`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={formattedDateForAttribute}>{formattedDateForUser}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  comment: ReviewProp
};

export default Review;

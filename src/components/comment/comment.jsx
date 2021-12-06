import React from "react";
import CommentProp from "./comment.prop";
import dayjs from "dayjs";
import {convertRatingToPercent} from "../../utils/utils";

const Comment = ({comment}) => {
  const {comment: text, date, id, rating, user: {avatar_url, name}} = comment;
  const formattedDateForUser = dayjs(date).format(`MMMM YYYY`);
  const formattedDateForAttribute = dayjs(date).format(`YYYY-MM-DD`);
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
        <time className="reviews__time" dateTime={formattedDateForAttribute}>{formattedDateForUser}</time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  comment: CommentProp
};

export default Comment;

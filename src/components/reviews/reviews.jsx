import React, {useEffect} from "react";
import CommentForm from "../review-form/review-form";
import PropTypes from "prop-types";
import {fetchComments} from "../../store/axios-actions";
import Spinner from "../spinner/spinner";
import Review from "../review/review";
import {useSelector, useDispatch} from "react-redux";

const Reviews = ({id}) => {
  const {comments, offer} = useSelector((state) => state.OFFER);
  const {isAuth} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(id));
  }, [id]);

  if (offer.id !== +id) {
    return (<Spinner/>);
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span
        className="reviews__amount">{comments.length}</span></h2>
      {comments.length ?
        <ul className="reviews__list">
          {comments.map((comment, i) => <Review key={i} comment={comment}/>)}
        </ul> :
        ``}
      {isAuth ? <CommentForm id={id}/> : ``}
    </section>
  );
};

Reviews.propTypes = {
  id: PropTypes.string,
};

export default Reviews;


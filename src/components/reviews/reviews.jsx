import React, {useEffect} from "react";
import CommentForm from "../review-form/review-form";
import PropTypes from "prop-types";
import {fetchComments} from "../../store/axios-actions";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";
import Review from "../review/review";

const Reviews = ({comments, isAuth, id, offer, onLoadComments}) => {
  useEffect(() => {
    onLoadComments(id);
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
  offer: PropTypes.object,
  isAuth: PropTypes.bool,
  comments: PropTypes.array,
  onLoadComments: PropTypes.func,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  isAuth: state.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(id) {
    dispatch(fetchComments(id));
  },
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);


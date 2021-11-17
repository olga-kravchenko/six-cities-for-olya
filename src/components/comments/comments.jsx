import React from "react";
import PropTypes from "prop-types";
import Comment from "../comment/comment";

const Comments = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.map((comment, i) => <Comment key={i} comment={comment}/>)}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;

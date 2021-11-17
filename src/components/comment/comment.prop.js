import PropTypes from "prop-types";

const CommentProp = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    is_pro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

export default CommentProp;

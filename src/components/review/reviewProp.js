import PropTypes from "prop-types";

const ReviewProp = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    is_pro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

export default ReviewProp;

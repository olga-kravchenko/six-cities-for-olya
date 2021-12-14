import React, {useEffect} from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {fetchNearbyOffer} from "../../store/axios-actions";
import Spinner from "../spinner/spinner";
import {useSelector, useDispatch} from "react-redux";

const NearestOffers = ({id}) => {
  const {nearestOffers} = useSelector((state) => state.OFFER);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNearbyOffer(id));
  }, [id]);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        {nearestOffers.length ?
          <div className="near-places__list places__list">
            {nearestOffers.map((o, i) => <OfferCard key={i} offer={o} pageType="near"/>)}
          </div> :
          <Spinner/>}
      </section>
    </div>
  );
};

NearestOffers.propTypes = {
  id: PropTypes.string,
};

export default NearestOffers;

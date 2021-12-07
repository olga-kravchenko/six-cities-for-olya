import React from "react";
import Map from "../map/map";
import PropTypes from "prop-types";

const PropertyMap = ({nearestOffers}) => {
  const cityInfo = nearestOffers.length ? nearestOffers.find((e) => e.city.location).city : {};
  return (
    <section className="property__map map">
      <Map cityInfo={cityInfo} offerList={nearestOffers} style={{height: `100%`, width: `1144px`, margin: `0 auto`}}/>
    </section>
  );
};

PropertyMap.propTypes = {
  id: PropTypes.string,
  nearestOffers: PropTypes.array,
  onLoadNearestOffers: PropTypes.func,
};

export default PropertyMap;

import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {connect} from "react-redux";

const Map = ({offerList, style, city}) => {
  const mapRef = useRef();
  const cityInfo = offerList.find((e) => e.city.location).city;
  const {location} = cityInfo;
  const points = offerList.map((offer) => offer.location);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: location.latitude,
        lng: location.longitude
      },
      zoom: 12,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.latitude,
        lng: point.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current);
    });
    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  return (
    <div id="map" style={style} ref={mapRef}/>
  );
};

Map.propTypes = {
  offerList: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  city: PropTypes.string
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {Map};
export default connect(mapStateToProps)(Map);

import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";

const Map = ({cityInfo, offerList, style}) => {
  const mapRef = useRef();
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

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id="map" style={style}/>
  );
};

Map.propTypes = {
  offerList: PropTypes.array.isRequired,
  cityInfo: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired
  }),
  points: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  })),
  style: PropTypes.object.isRequired
};

export default Map;

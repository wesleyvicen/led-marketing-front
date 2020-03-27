import React from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Pin } from './styles';

const intlMonetary = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

const Ad = ({ ad }) =>
  ad.map(ads => (
    <Marker key={ads.id} longitude={ads.longitude} latitude={ads.latitude}>
      <Pin>
        <Link to="">{intlMonetary.format(ads.price)}</Link>
      </Pin>
    </Marker>
  ));

Ad.propTypes = {
  ad: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      longitude: PropTypes.number,
      latitude: PropTypes.number,
    })
  ).isRequired,
};

export default Ad;

import React from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Pin } from './styles';

// const intlMonetary = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
//   minimumFractionDigits: 2,
// });

const Ads = ({ ads }) =>
  ads.map(ad => (
    <Marker key={ad.id} longitude={ad.longitude} latitude={ad.latitude}>
      <Pin>
        <Link>{ad.nincho}</Link>
      </Pin>
    </Marker>
  ));

Ads.propTypes = {
  ads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      longitude: PropTypes.number,
      latitude: PropTypes.number,
      nincho: PropTypes.string,
    })
  ).isRequired,
};

export default Ads;

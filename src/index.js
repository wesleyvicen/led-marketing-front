import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1Ijoid2VzbGV5dmljZW4iLCJhIjoiY2s3cWdpaXBnMDNiNDNnazVra3QwMTh3dCJ9.wBSkVJXM6WNGF3z6A2yBQg';
ReactDOM.render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';
import MapGL from 'react-map-gl';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import { api } from '../../services/api';
import { logout } from '../../services/auth';

import Ad from './components/Ad';

const TOKEN =
  'pk.eyJ1Ijoid2VzbGV5dmljZW4iLCJhIjoiY2s3cWdpaXBnMDNiNDNnazVra3QwMTh3dCJ9.wBSkVJXM6WNGF3z6A2yBQg';

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired,
  };

  constructor() {
    super();
    this.updateAdsLocalization = debounce(this.updateAdsLocalization, 500);
  }

  state = {
    viewport: {
      latitude: -7.657346400000001,
      longitude: -35.3136897,
      zoom: 12.8,
      bearing: 0,
      pitch: 0,
    },
    ads: [],
  };

  componentDidMount() {
    this.loadAds();
  }

  updateAdsLocalization() {
    this.loadAds();
  }

  loadAds = async () => {
    const { latitude, longitude } = this.state.viewport;
    try {
      const response = await api.get('/ad/lists', {
        params: { latitude, longitude },
      });
      this.setState({ ads: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleLogout = e => {
    logout();
    this.props.history.push('/');
  };

  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    const { ads } = this.state;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
        onViewStateChange={this.updateAdsLocalization.bind(this)}
      >
        <Ad ads={ads} />
      </MapGL>
    );
  }
}

const DimensionedMap = withRouter(Dimensions()(Map));
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;

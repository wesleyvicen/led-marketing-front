import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import { Container } from './styles';
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -7.6573384,
      lng: -35.3138423,
      zoom: 10,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }
  render() {
    return (
      <Container>
        <div>
          <div>
            <div>
              Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{' '}
              {this.state.zoom}
            </div>
          </div>
          <div ref={el => (this.mapContainer = el)} className="mapContainer" />
        </div>
      </Container>
    );
  }
}

export default withRouter(Map);

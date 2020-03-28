import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import { Container } from './styles';
class Map extends Component {
  mapRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      lat: -7.6573384,
      lng: -35.3138423,
      zoom: 10,
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom,
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <Container>
        <div className="sidebarStyle">
          {`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}
        </div>
        <div ref={this.mapRef} className="mapContainer" />
      </Container>
    );
  }
}

export default withRouter(Map);

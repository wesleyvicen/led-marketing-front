import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { Container, Pin } from './styles';
import { api } from '../../../../services/api';
const AnyReactComponent = ({ text }) => (
  <Pin>
    <h1>{text}</h1>
  </Pin>
);
class Map extends Component {
  static defaultProps = {
    center: {
      lat: -7.6573384,
      lng: -35.3136997,
    },
    zoom: 11,
  };
  state = {
    ads: [],
  };

  loadAds = async () => {
    try {
      const response = await api.get('/ad/lists');
      this.setState({ ads: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.loadAds();
  }

  render() {
    const { ads } = this.state;
    return (
      <Container>
        <div style={{ height: '92vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDg81CEwDyJN8qBtPIIOnCf9uA3G76nDYE',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {ads.map((ad, key) => (
              <AnyReactComponent
                lat={ad.latitude}
                lng={ad.longitude}
                text={ad.nameResp}
              />
            ))}
          </GoogleMapReact>
        </div>
      </Container>
    );
  }
}

export default withRouter(Map);

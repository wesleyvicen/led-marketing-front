import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { Container, Pin } from './styles';
import { api } from '../../../../services/api';
const AnyReactComponent = ({ text }) =>
  text === 'games' ? (
    <img
      src={require('../../../../assets/icons-marker-games.png')}
      alt={text}
    />
  ) : (
    <img src={require('../../../../assets/icons-marker-food.png')} alt={text} />
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
              key: 'AIzaSyBXG1URJBG1XJ4WouLEIGwyBUeJYnJ6N7I',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {ads.map((ad, key) => (
              <AnyReactComponent
                lat={ad.latitude}
                lng={ad.longitude}
                text={ad.nincho}
              />
            ))}
          </GoogleMapReact>
        </div>
      </Container>
    );
  }
}

export default withRouter(Map);

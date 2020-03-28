import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../App/components/Navbar';
import Map from '../App/components/Map';

class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Map />
      </>
    );
  }
}

export default withRouter(Dashboard);

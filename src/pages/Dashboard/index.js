import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../App/components/Navbar';
class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default withRouter(Dashboard);

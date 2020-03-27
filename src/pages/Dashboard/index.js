import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { VerticalMenu, Container } from './style';
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

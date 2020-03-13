import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { VerticalMenu, Container } from './style';
class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div className="left">
          <VerticalMenu>
            <a href="#" class="active">
              Home
            </a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
          </VerticalMenu>
        </div>
        <div className="right">teste</div>
      </Container>
    );
  }
}

export default withRouter(Dashboard);

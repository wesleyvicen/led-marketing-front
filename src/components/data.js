import * as React from 'react';
import '../styles/style.css';
import * as moment from 'moment';
import 'moment/locale/pt-br';

class Anuncio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tempo: moment().format('Do MMMM YYYY'),
      current: moment().format('h:mm:ss a'),
    };
  }

  update() {
    this.setState(props => ({
      tempo: moment().format('Do MMMM YYYY'),
      current: moment().format('h:mm:ss a'),
    }));
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 1000);
  }
  render() {
    return (
      <div className={'date'}>
        {this.state.tempo}
        <br />
        {this.state.current}
      </div>
    );
  }
}

export default Anuncio;

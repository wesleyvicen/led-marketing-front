import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { api } from '../../services/api';

import logo from '../../assets/logo.png';

import { Form, Container } from './styles';

class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    error: '',
  };
  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: 'Preencha todos os dados para se cadastrar' });
    } else {
      try {
        await api.post('/users', { username, email, password });
        this.props.history.push('/');
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Ocorreu um erro ao registrar sua conta. T.T' });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={logo} alt={'Led Marketing - Logo'} />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Endereço de Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="text"
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/login">Fazer Login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);

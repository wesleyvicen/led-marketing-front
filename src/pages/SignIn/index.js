import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { api } from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container } from './style';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar' });
    } else {
      try {
        const response = await api.post('/sessions', { email, password });
        login(response.data.token);
        this.props.history.push('/run');
      } catch (err) {
        this.setState({
          error:
            'Houve um problema com o login, verifique suas credenciais. T.T',
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Led Marketing - Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/SignUp">Criar Conta</Link>
        </Form>
      </Container>
    );
  }
}
export default withRouter(SignIn);

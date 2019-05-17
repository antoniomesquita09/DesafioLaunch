import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input } from '@rocketseat/unform';

import { Creators as LoginActions } from '../../Store/Ducks/login';
import { Container } from './styles';

class Login extends Component {
  state = {};
  handleSubmit = data => {
    const { loginRequest } = this.props;

    loginRequest(data);
  };

  handleRegister = () => {};

  render() {
    return (
      <Container>
        <h1>Login to have so much fun!!!</h1>
        <Form onSubmit={this.handleSubmit}>
          <Input name="email" />
          <Input name="password" placeholder="Sua melhor senha" type="password" />
          <button type="submit">Login</button>
        </Form>
        <button type="button" onClick={this.handleRegister}>
          Register
        </button>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);

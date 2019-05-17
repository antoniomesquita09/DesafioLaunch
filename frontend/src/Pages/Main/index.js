import React, { Component } from 'react';
import {
  Text, View, TouchableHighlight, TextInput, TouchableOpacity,
} from 'react-native';
import { reduxForm } from 'redux-form';

import styles from './styles';
import { facebookLogin } from '../../Services/auth';

class Main extends Component {
  state = {
    error: null,
    loading: false,
  };

  handleLoginFacebook = async () => {
    const response = await facebookLogin();

    if (response.error) {
      this.setState({ error: response.error });
    }
  };

  handleSubmit = (data) => {
    console.tron.log(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput type="text" placeholder="Seu nome" />
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight onPress={() => {}}>
          <Text>Entrar com facebook</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Main);

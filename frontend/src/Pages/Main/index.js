import React, { Component } from "react";

import { Text, View, TouchableHighlight } from "react-native";

import styles from "./styles";
import { facebookLogin } from "../../Services/auth";

export default class Main extends Component {
  state = {
    error: null,
    loading: false
  };

  handleLoginFacebook = async () => {
    const response = await facebookLogin();

    if (response.error) {
      this.setState({ error: response.error });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleLoginFacebook}>
          <Text>Entrar com facebook</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

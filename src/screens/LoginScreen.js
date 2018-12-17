/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { 
  Button, 
  KeyboardAvoidingView,
  Modal, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from "react-native";
import { Auth } from 'aws-amplify';

type Props = {};
export default class LoginScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    Auth.signIn(email, password)
      // If we are successful, navigate to Home screen
      .then(() => this.props.navigation.navigate('Home'))
      // On failure, display error in console
      .catch(err => console.log(err));
  }

  handleSignUp = () => {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fit</Text>
        <KeyboardAvoidingView >
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            placeholder="my@email.com"
            onChangeText={
            // Set this.state.email to the value in this Input box
            (value) => this.setState({ email: value })
          }
          />
          <TextInput
            style={styles.input}
            placeholder="p@ssw0rd123"
            onChangeText={
            // Set this.state.password to the value in this Input box
            value => this.setState({ password: value })
          }
          />
          <Button 
            title = 'LOGIN'
            onPress={ this.handleSignIn }
          />
          <View>
            <Text>Don't have a account</Text>
            <Button title = 'Sign Up'
            onPress={ this.handleSignUp }
             />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    height: 35,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

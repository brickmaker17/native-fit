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
export default class SignupScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmationCode: '',
      modalVisible: false,
    };
  }

  handleSignUp = () => {
    // alert(JSON.stringify(this.state));
    const { email, password, confirmPassword } = this.state;
    // Make sure passwords match
    if (password === confirmPassword) {
      Auth.signUp({
        username: email,
        password,
        attributes: { email },
        })
        // On success, show Confirmation Code Modal
        .then(() => this.setState({ modalVisible: true }))
        // On failure, display error in console
        .catch(err => console.log(err));
    } else {
      alert('Passwords do not match.');
    }
  }

  handleSignIn = () => {
    this.props.navigation.navigate('Login')
  }

  handleConfirmationCode = () => {
    const { email, confirmationCode } = this.state;
    Auth.confirmSignUp(email, confirmationCode, {})
      .then(() => {
        this.setState({ modalVisible: false });
        this.props.navigation.navigate('Home')
      })
      .catch(err => console.log(err));
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
            (value) => this.setState({ password: value })
          }
          />
          <TextInput
            style={styles.input}
            placeholder="p@ssw0rd123"
            onChangeText={
            // Set this.state.confirmPassword to the value in this Input box
            (value) => this.setState({ confirmPassword: value })
          }
          />
          <Button 
            title = 'Sign Up'
            onPress={ this.handleSignUp }
          />
          <View>
              <Text>Have a account</Text>
                <Button 
                title = 'LOGIN'
                onPress={ this.handleSignIn }
                />
          </View>
        </KeyboardAvoidingView>
        <Modal
          visible={this.state.modalVisible}
        >
          <View
            style={styles.container}
          >
            <TextInput
            placeholder="code"
              onChangeText={
                // Set this.state.confirmationCode to the value in this Input box
                (value) => this.setState({ confirmationCode: value })
              }
            />
            <Button
              title='Submit'
              onPress={ this.handleConfirmationCode }
            />
          </View>
        </Modal>
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

/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { 
  Button,
  KeyboardAvoidingView,
  Modal,
  Platform, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from "react-native";
import { Auth } from 'aws-amplify';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const isIOS = Platform.OS === 'ios';
const openEye = isIOS ? 'ios-eye' : 'md-eye';
const closedEye = isIOS ? 'ios-eye-off' : 'md-eye-off';


type State = {
  email: string,
  hidePassword: boolean,
  password: string,
  errMessage: string,
};
export default class LoginScreen extends Component<State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hidePassword: true,
      password: '',
      errMessage: ''
    };
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    Auth.signIn(email, password)
      // If we are successful, navigate to Home screen
      .then(() => this.props.navigation.navigate('Home'))
      // On failure, display error in console
      .catch(err => this.setState({errMessage: err}));
  }

  handleSignUp = () => {
    this.props.navigation.navigate('Signup');
  }

  handlePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  }

  render() {
    const { errMessage, hidePassword } = this.state;
    const userMessage = errMessage !== '' ? 
      'This email and password combination is incorrect.' : '';
    const passwordVisibility = hidePassword === true ? closedEye : openEye;

    return (
      <LinearGradient colors={['#302f2f', '#e7853c', '#302f2f']} style={styles.container}>
          <Text style={styles.heading}>Fit</Text>
          <KeyboardAvoidingView >
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                placeholder="my@email.com"
                onChangeText={
                (value) => this.setState({ email: value })
              }
              />
              <View style={styles.passwordInput}>
                <TextInput
                  style={ styles.passwordTextBox }
                  secureTextEntry = { hidePassword }
                  placeholder="p@ssw0rd"
                  onChangeText={
                  value => this.setState({ password: value })
                }
                />
                <TouchableOpacity style = { styles.visibilityBtn } onPress={ this.handlePasswordVisibility } >
                  <Icon name={passwordVisibility} size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.userMessage}>{userMessage}</Text>
            <Button
              color='#e5ccb9'
              title = 'LOGIN'
              onPress={ this.handleSignIn }
            />
            <View style={styles.buttonWrapper}>
              <Text>Don't have a account</Text>
              <TouchableOpacity style={styles.button}
              onPress={ this.handleSignUp }
              >
              <Text style={styles.signUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginLeft: 5
  },
  container: {
    height: '100%',
    justifyContent: "center",
  },
  heading: {
    textAlign: 'center',
  },
  input: {
    borderBottomColor: '#302f2f',
    borderBottomWidth: 1,
    height: 35,
    marginBottom: 10,
  },
  login: {
    color: '#e7853c'
  },
  inputContainer: {
    marginLeft: '20%',
    marginRight: '20%',
  },
  signUp: {
    color: '#e5ccb9'
  },
  userMessage: {
    color: '#c62234',
    textAlign: "center",
  },
  passwordInput: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderBottomColor: '#302f2f',
    borderBottomWidth: 1,
    height: 35,
    marginBottom: 10,
  },
  passwordTextBox: {
    alignSelf: 'stretch',
    paddingRight: 25,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
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

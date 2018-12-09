/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { 
  Button, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from "react-native";
import SearchBar from "../components/SearchBar";

type Props = {};
export default class LoginScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fit</Text>
        <KeyboardAvoidingView >
          <TextInput
            style={styles.input}
            placeholder = 'Username'
          />
          <TextInput
            style={styles.input}
            placeholder = 'password'
          />
          <Button 
            title = 'LOGIN'
          />
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

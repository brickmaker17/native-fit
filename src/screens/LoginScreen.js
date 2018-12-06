/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBar from "../components/SearchBar";

type Props = {};
export default class LoginScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TextInput 
          value = 'Username'
        />
        <TextInput 
          value = 'password'
        />
        <Button 
          title = 'LOG IN'
        />
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

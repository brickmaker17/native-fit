/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

type Props = {};
export default class MyWorkOutScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'My Workouts',
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MyWorkOutScreen</Text>
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

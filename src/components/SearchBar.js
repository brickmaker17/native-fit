/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {};
export default class SearchBar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput />
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

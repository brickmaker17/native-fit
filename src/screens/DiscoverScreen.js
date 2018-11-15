/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class DiscoverScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Discover',
    };
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Discover</Text>
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

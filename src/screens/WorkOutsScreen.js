/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class WorkOutsScreen extends Component<Props> {
  static navigationOptions = () => {
    return {
      headerTitle: 'WorkOuts'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>WorkOutsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#373944"
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

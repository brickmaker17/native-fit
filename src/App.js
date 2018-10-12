/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RootStack from "./navigation/RootStack";
import WorkOutsScreen from "./screens/WorkOutsScreen";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

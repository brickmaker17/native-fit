/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";

type Props = {};
export default class ConnectedApp extends Component<Props> {
  render() {
    return (
      <RootNavigation />
    );
  }
}
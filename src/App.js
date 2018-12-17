/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

type Props = {};

Amplify.configure(aws_exports);
export default class App extends Component<Props> {
  render() {
    return <RootNavigation />;
  }
}

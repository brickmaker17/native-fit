/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import Lifting from '../assets/images/Lifting.jpg';

type Props = {};
export default class DiscoverScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Discover',
        headerStyle: {
          backgroundColor: "#373944",
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#e7853c'

        },
    };
  };


  render() {
    return (
      <ImageBackground source={Lifting} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text>Discover</Text>
          <TextInput style={styles.input} placeholder='Exercise Name' />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  input: {
    backgroundColor: "#ffffff"
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

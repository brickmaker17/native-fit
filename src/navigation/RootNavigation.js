import React from "react";
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from "./MainTabNavigator";
import WorkOutsScreen from "../screens/WorkOutsScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: MainTabNavigator,
  },
  {
    initialRouteName: 'Home',
  }
);

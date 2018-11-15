import React from "react";
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from "./MainTabNavigator";
import WorkOutsScreen from "../screens/WorkOutsScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

const AppStack = createStackNavigator({ Home: MainTabNavigator});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: AppStack,
  },
  {
    initialRouteName: 'Home',
  }
);

import React from "react";
import { createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import WorkOutsScreen from "../screens/WorkOutsScreen";

export default createStackNavigator({
  Home: {
    screen: MainTabNavigator
  }
});

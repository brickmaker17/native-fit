import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import CustomIcon from "../components/CustomIcon";
import WorkOutsStack from "../navigation/WorkOutsStack";
import WorkOutsScreen from '../screens/WorkOutsScreen';
import DiscoverScreen from "../screens/DiscoverScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";
import MyWorkOutScreen from "../screens/MyWorkOutScreen";

export default createBottomTabNavigator(
  {
    WorkOuts: {
      screen: createStackNavigator({ WorkOuts: { screen: WorkOutsScreen }})
    },
    Discover: {
      screen: createStackNavigator({ Discover: { screen: DiscoverScreen }})
    },
    Favorites: {
      screen: createStackNavigator({ Favorites: { screen: FavoritesScreen }})
    },
    More: {
      screen: createStackNavigator({ More: { screen: MoreInfoScreen }})
    },
    MyWorkOuts: {
      screen: createStackNavigator({ MyWorkOuts: { screen: MyWorkOutScreen }})
    }
  },
  {
    headerMode: 'screen',
    animationEnabled: false,
    initialRouteName: "Discover",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        let iconName;
        let size = 32;
        let style = {
          tintColor: '#373944',
          marginBottom: -8,
        };
        switch (routeName) {
          case "Discover":
            iconName = "discover";
            break;
          case "WorkOuts":
            iconName = "workOut";
            break;
          case "Favorites":
            iconName = "favorites";
            size = 36;
            break;
          case "More":
            iconName = "more";
            break;
          case "MyWorkOuts":
            iconName = "myWorkOuts";
            break;
          case "Settings":
          default:
            iconName = isIOS
              ? `ios-options${focused ? "" : "-outline"}`
              : "md-options";
        }

        return (
          <CustomIcon
            focused={focused}
            name={iconName}
            size={size}
            style={style}
          />
        );
      }
    }),
    order: ['Discover', 'WorkOuts', 'Favorites', 'MyWorkOuts', 'More'],
    tabBarOptions: {
      style: {
        backgroundColor: '#e7853c',
        color: '#e7853c',
      },
      labelStyle: {
        color: '#373944',
      }
    },
  });

import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import CustomIcon from "../components/CustomIcon";
import WorkOutsStack from "../navigation/WorkOutsStack";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";
import MyWorkOutScreen from "../screens/MyWorkOutScreen";

export default createBottomTabNavigator(
  {
    WorkOuts: {
      screen: WorkOutsStack
    },
    DiscoverWorkOut: {
      // navigationOptions: () => ({ tabBarLabel: "Discover" }),
      screen: DiscoverScreen
    },
    Favorites: {
      // navigationOptions: () => ({ tabBarLabel: "Favorites" }),
      screen: FavoritesScreen
    },
    More: {
      // navigationOptions: () => ({ tabBarLabel: "More" }),
      screen: MoreInfoScreen
    },
    MyWorkOuts: {
      // navigationOptions: () => ({ tabBarLabel: "My Workouts" }),
      screen: MyWorkOutScreen
    }
  },
  {
    headerMode: 'screen',
    animationEnabled: false,
    initialRouteName: "DiscoverWorkOut",
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
          case "DiscoverWorkOut":
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
    order: ['DiscoverWorkOut', 'WorkOuts', 'Favorites', 'MyWorkOuts', 'More'],
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

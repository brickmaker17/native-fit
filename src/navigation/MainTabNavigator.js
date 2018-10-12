import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import CustomIcon from "../components/CustomIcon";
import WorkOutsScreen from "../screens/WorkOutsScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";
import MyWorkOutScreen from "../screens/MyWorkOutScreen";

export default createBottomTabNavigator(
  {
    WorkOuts: {
      navigationOptions: () => ({ tabBarLabel: "Workouts" }),
      screen: WorkOutsScreen
    },
    DiscoverWorkOut: {
      navigationOptions: () => ({ tabBarLabel: "Discover" }),
      screen: DiscoverScreen
    },
    Favorites: {
      navigationOptions: () => ({ tabBarLabel: "Favorites" }),
      screen: FavoritesScreen
    },
    More: {
      navigationOptions: () => ({ tabBarLabel: "More" }),
      screen: MoreInfoScreen
    },
    MyWorkOuts: {
      navigationOptions: () => ({ tabBarLabel: "My Workouts" }),
      screen: MyWorkOutScreen
    }
  },
  {
    animationEnabled: false,
    initialRouteName: "DiscoverWorkOut",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        let iconName;
        let size = 32;
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
            style={{ marginBottom: -8 }}
          />
        );
      }
    })
    // order: ["DiscoverWorkOut", "WorkOuts", "Favorites", "MyWorkOuts", "More"],
    // // swipeEnabled: false,
    // tabBarOptions: {
    //   activeTintColor: "blue",
    //   labelStyle: {
    //     borderWidth: 0,
    //     fontSize: 12,
    //     marginTop: 1
    //   },
    //   style: {
    //     backgroundColor: "green",
    //     borderTopColor: "blue",
    //     shadowColor: "black",
    //     shadowOffset: {
    //       height: 0,
    //       width: 0
    //     },
    //     shadowOpacity: 0.12,
    //     shadowRadius: 9
    //   }
    // },
    // tabBarPosition: "bottom"
  }
);

import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { colors } from "../global";
import { Icon } from "react-native-elements";
import FirstNavigator from "./FirstNavigator";
import SecondNavigator from "./SecondNavigator";
import ThirdNavigator from "./ThirdNavigator";

const MainStack = createBottomTabNavigator(
  {
    FirstNavigator: {
      screen: FirstNavigator,
      navigationOptions: {
        title: "首页"
      }
    },
    SecondNavigator: {
      screen: SecondNavigator,
      navigationOptions: {
        title: "课程"
      }
    },
    ThirdNavigator: {
      screen: ThirdNavigator,
      navigationOptions: {
        title: "我的"
      }
    }
  },
  {
    // initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: colors.primaryColor
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "FirstNavigator") {
          iconName = `dashboard`;
        } else if (routeName === "SecondNavigator") {
          iconName = `subject`;
        } else {
          iconName = `person`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export { MainStack };

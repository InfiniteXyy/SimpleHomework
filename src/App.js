import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import CoursesScreen from "./CoursesScreen";
import SettingScreen from "./SettingScreen";
import Ionicons from "@expo/vector-icons/Ionicons"

const MainStack = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Courses: CoursesScreen,
    Setting: SettingScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Dashboard") {
          iconName = `ios-home${focused? '' : '-outline'}`;
        } else if (routeName === "Courses") {
          iconName = `ios-list-box${focused? '' : '-outline'}`;
        } else {
          iconName = `ios-settings${focused? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    })
  },
  {
    initialRouteName: "Dashboard"
  }
);

export default class App extends React.Component {
  render() {
    return <MainStack />;
  }
}

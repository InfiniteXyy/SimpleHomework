import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import CoursesScreen from "./CoursesScreen";
import SettingScreen from "./SettingScreen";
import { Icon } from "react-native-elements";

const MainStack = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Courses: CoursesScreen,
    Setting: SettingScreen
  },
  {
    initialRouteName: "Courses",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Dashboard") {
          iconName = `dashboard`;
        } else if (routeName === "Courses") {
          iconName = `subject`;
        } else {
          iconName = `settings`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default class App extends React.Component {
  render() {
    return <MainStack />;
  }
}

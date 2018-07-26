import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import CoursesScreen from "./CoursesScreen";
import SettingScreen from "./SettingScreen";
import { Icon } from "react-native-elements";
import HomeworkAdd from "./modals/HomeworkAdd";
import { View } from 'react-native'


const MainStack = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Courses: CoursesScreen,
    Setting: SettingScreen
  },
  {
    animationEnabled: true,
    initialRouteName: "Dashboard",
    navigationOptions: ({ navigation }) => ({
      swipeEnabled: true,
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

const RootStack = createBottomTabNavigator(
  {
    Main: MainStack,
    AddHomework: HomeworkAdd,
  },
  {
    initialRouteName: "AddHomework",
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <RootStack />;
      </View>
    );
  }
}

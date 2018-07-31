import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import LoginScreen from "./modals/LoginScreen";
import RegisterScreen from "./modals/RegisterScreen";
import HomeworkAdd from "./modals/HomeworkAdd";
import CourseAdd from "./modals/CourseAdd";

import HomeNavigator from "./HomeNavigator";
import SecondNavigator from "./SecondNavigator";
import ThirdNavigator from "./ThirdNavigator";

import { Icon } from "react-native-elements";
import { colors } from "./static";
import { demoList, profileData } from "./DemoServer";

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "首页"
      }
    },
    Courses: {
      screen: SecondNavigator,
      navigationOptions: {
        title: "课程"
      }
    },
    Profile: {
      screen: ThirdNavigator,
      navigationOptions: {
        title: "我的"
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.blue
    },

    initialRouteName: "Profile",

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `dashboard`;
        } else if (routeName === "Courses") {
          iconName = `subject`;
        } else {
          iconName = `person`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    AddHomework: HomeworkAdd,
    AddCourse: CourseAdd,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Main",
    headerMode: "none",
    mode: "modal",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: demoList,
      myId: "1",
      me: profileData[0],
      profileData: profileData
    };
    console.ignoredYellowBox = ["Remote debugger"];
  }

  render() {
    return <RootStack screenProps={this.state} />;
  }
}

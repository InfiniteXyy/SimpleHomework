import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { colors, themeColor } from './global';
import { Icon } from 'react-native-elements';
import React from 'react';
import HomeworkDetailEdit from './screens/homework/HomeworkDetailEdit';
import LoginModal from './screens/modals/Login';
import Register from './screens/modals/Register';
import Dashboard from './screens/DashBoard';
import HomeworkDetail from './screens/homework/HomeworkDetail';
import CourseDetail from './screens/course/CourseDetail';
import Courses from './screens/Courses';
import Mine from './screens/Mine';
import Setting from './screens/profile/Setting';
import Profile from './screens/profile/Profile';
import PersonPage from './screens/profile/PersonPage';
import ThemeChoose from './screens/profile/ThemeChoose';

const FirstNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    HomeworkDetail: HomeworkDetail,
    HomeworkEdit: HomeworkDetailEdit,
    CourseDetail: CourseDetail
  },
  {
    // initialRouteName: "CourseDetail",
    headerMode: 'none',
    mode: 'card',
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    }
  }
);

const SecondNavigator = createStackNavigator(
  {
    Courses: Courses,
    CourseDetail: CourseDetail
  },
  {
    // initialRouteName: "Courses",
    headerMode: 'none',
    mode: 'card',
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    }
  }
);

const ThirdNavigator = createStackNavigator(
  {
    Mine: Mine,
    Setting: Setting,
    Profile: Profile,
    PersonPage: PersonPage,
    ThemeChoose: ThemeChoose,
    Login: LoginModal,
    Register: Register
  },
  {
    // initialRouteName: "Courses",
    headerMode: 'none',
    mode: 'card',
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    }
  }
);

const AppRouter = createBottomTabNavigator(
  {
    FirstNavigator: {
      screen: FirstNavigator,
      navigationOptions: {
        title: '首页'
      }
    },
    SecondNavigator: {
      screen: SecondNavigator,
      navigationOptions: {
        title: '课程'
      }
    },
    ThirdNavigator: {
      screen: ThirdNavigator,
      navigationOptions: {
        title: '我的'
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
        if (routeName === 'FirstNavigator') {
          iconName = `dashboard`;
        } else if (routeName === 'SecondNavigator') {
          iconName = `subject`;
        } else {
          iconName = `person`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default AppRouter;

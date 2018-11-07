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
import AboutPage from './screens/about/AboutPage';
import OpenSourcePage from './screens/about/OpenSourcePage';
import ArchivePage from './screens/profile/ArchivePage';
import Weeks from './screens/profile/Weeks';
import SignIn from './screens/SignIn';

const defaultCard = {
  headerMode: 'none',
  mode: 'card',
  cardStyle: {
    backgroundColor: themeColor.backgroundColor
  }
};
const DashboardNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    HomeworkDetail: HomeworkDetail,
    HomeworkEdit: HomeworkDetailEdit
  },
  defaultCard
);

const CourseNavigator = createStackNavigator(
  {
    Courses: Courses,
    CourseDetail: CourseDetail
  },
  defaultCard
);
const SignInNavigator = createStackNavigator(
  {
    SignIn: SignIn
  },
  defaultCard
);

const ProfileNavigator = createStackNavigator(
  {
    Mine: Mine,
    Profile: Profile,
    PersonPage: PersonPage,
    Archive: ArchivePage,
    Week: Weeks
  },
  defaultCard
);

const MainRouter = createBottomTabNavigator(
  {
    DashboardNavigator: {
      screen: DashboardNavigator,
      navigationOptions: {
        title: '首页'
      }
    },
    CourseNavigator: {
      screen: CourseNavigator,
      navigationOptions: {
        title: '课程'
      }
    },
    SignInNavigator: {
      screen: SignInNavigator,
      navigationOptions: {
        title: '签到'
      }
    },
    ProfileNavigator: {
      screen: ProfileNavigator,
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
        if (routeName === 'DashboardNavigator') {
          iconName = `dashboard`;
        } else if (routeName === 'CourseNavigator') {
          iconName = `subject`;
        } else if (routeName === 'ProfileNavigator') {
          iconName = `person`;
        } else if (routeName === 'SignInNavigator') {
          iconName = `date-range`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

const Settings = createStackNavigator(
  {
    Main: Setting,
    About: AboutPage,
    OpenSource: OpenSourcePage,
    ThemeChoose: ThemeChoose,
    Login: LoginModal,
    Register: Register
  },
  defaultCard
);

const AppRouter = createStackNavigator(
  {
    Main: MainRouter,
    Setting: Settings
  },
  defaultCard
);

export default AppRouter;

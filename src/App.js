import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import HomeworkAdd from './modals/HomeworkAdd'
import CourseAdd from './modals/CourseAdd'

import HomeNavigator from './HomeNavigator'
import SecondNavigator from './SecondNavigator'
import ThirdNavigator from './ThirdNavigator'

import { Icon } from 'react-native-elements'
import { colors } from './static'

const demoData = {
  demoList: [
    {
      cid: '1',
      title: '机器学习',
      data: [
        {id: '2', finished: false, content: '整理房间'},
        {id: '3', finished: false, content: '做大扫除'}
      ]
    },
    {
      cid: '2',
      title: '哈哈之课',
      data: [
        {id: '4', finished: true, content: '做张卷子'},
        {id: '5', finished: false, content: '整理房间'},
        {id: '6', finished: true, content: '做大扫除'}
      ]
    },
    {
      cid: '3',
      title: '移动应用开发'
    },
    {
      cid: '4',
      title: 'J2EE'
    },
    {
      cid: '5',
      title: 'Java核心技术'
    },
    {
      cid: '6',
      title: '神奇的威兹班'
    }
  ]
}

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: '首页'
      }
    },
    Courses: {
      screen: SecondNavigator,
      navigationOptions: {
        title: '课程'
      }
    },
    Profile: {
      screen: ThirdNavigator,
      navigationOptions: {
        title: '我的'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `dashboard`
        } else if (routeName === 'Courses') {
          iconName = `subject`
        } else {
          iconName = `person`
        }
        return <Icon name={iconName} size={25} color={tintColor}/>
      }
    })
  }
)

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    AddHomework: HomeworkAdd,
    AddCourse: CourseAdd,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    mode: 'modal',
    cardStyle: {
      backgroundColor: '#fafafa'
    }
  }
)

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: demoData.demoList}
    console.ignoredYellowBox = ['Remote debugger']
  }

  render () {
    return <RootStack screenProps={this.state}/>
  }
}

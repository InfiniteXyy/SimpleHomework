import { Platform, StyleSheet } from 'react-native';

const routeNames = {
  homeworkAdd: 'HomeworkAdd',
  courseAdd: 'CourseAdd',
  personPage: 'PersonPage',
  setting: 'Setting',
  profileSetting: 'Profile',
  theme: 'ThemeChoose',
  login: 'Login',
  register: 'Register',
  courseDetail: 'CourseDetail',
  homeworkDetail: 'HomeworkDetail',
  homeworkEdit: 'HomeworkEdit'
};

const gStyles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1
  },
  cardContainer: {
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: '#CCCCCC',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  listContainer: {
    marginLeft: 16,
    borderBottomColor: '#cccccc',
    paddingTop: 16,
    borderBottomWidth: 0.5
  }
});

const colors = {
  rice: '#fafafa',
  black: '#4a4a4a',
  gray: '#9B9B9B',
  darkerGray: '#757575',
  green: '#7ED321',
  brown: '#8B572A',
  blue: '#019AE8',
  lightBlue: '#89c3eb',
  red: '#e83929'
};

const themeColor = {
  primaryColor: colors.blue,
  primaryText: colors.black,
  redText: colors.red,
  secondaryText: colors.gray,
  activeIcon: colors.darkerGray,
  inactiveIcon: colors.gray,
  backgroundColor: colors.rice,
  underlayColor: '#cccccc'
};

export { gStyles, colors, themeColor, routeNames };

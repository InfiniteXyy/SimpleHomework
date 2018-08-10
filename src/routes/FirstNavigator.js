import { createStackNavigator } from "react-navigation";
import { themeColor } from "../global";
import { HomeworkDetail, CourseDetail, Dashboard } from "../screens";
import HomeworkDetailEdit from '../screens/HomeworkDetailEdit'

const FirstNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    HomeworkDetail: HomeworkDetail,
    HomeworkEdit: HomeworkDetailEdit,
    CourseDetail: CourseDetail
  },
  {
    // initialRouteName: "CourseDetail",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    }
  }
);
export default FirstNavigator;

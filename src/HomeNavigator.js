import HomeworkDetail from "./modals/HomeworkDetail";
import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import CourseDetail from "./modals/CourseDetail";

export default (HomeNavigator = createStackNavigator(
  {
    DashboardMain: DashboardScreen,
    HomeworkDetail: HomeworkDetail,
    CourseDetail: CourseDetail
  },
  {
    // initialRouteName: "HomeworkDetail",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
));

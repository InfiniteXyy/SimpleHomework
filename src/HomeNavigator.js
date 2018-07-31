import HomeworkDetail from "./modals/HomeworkDetail";
import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./screens/DashboardScreen";
import CourseDetail from "./modals/CourseDetail";

const HomeNavigator = createStackNavigator(
  {
    DashboardMain: DashboardScreen,
    HomeworkDetail: HomeworkDetail,
    CourseDetail: CourseDetail
  },
  {
    //initialRouteName: "CourseDetail",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
);
export default HomeNavigator;

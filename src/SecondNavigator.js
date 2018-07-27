import CourseDetail from "./modals/CourseDetail";
import { createStackNavigator } from "react-navigation";
import CourseScreen from "./CoursesScreen";

export default (HomeNavigator = createStackNavigator(
  {
    CourseMain: CourseScreen,
    CourseDetail: CourseDetail
  },
  {
    // initialRouteName: "CourseDetail",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
));

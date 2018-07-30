import CourseDetail from "./modals/CourseDetail";
import { createStackNavigator } from "react-navigation";
import CourseScreen from "./screens/CoursesScreen";

const SecondNavigator = createStackNavigator(
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
);
export default SecondNavigator;

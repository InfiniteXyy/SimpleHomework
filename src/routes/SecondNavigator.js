import { createStackNavigator } from "react-navigation";
import { themeColor } from "../global";
import { CourseDetail, Courses } from "../screens";

const SecondNavigator = createStackNavigator(
  {
    Courses: Courses,
    CourseDetail: CourseDetail
  },
  {
    // initialRouteName: "Courses",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    }
  }
);
export default SecondNavigator;

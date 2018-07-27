import HomeworkDetail from "./modals/HomeworkDetail";
import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";

export default (HomeNavigator = createStackNavigator(
  {
    DashboardMain: DashboardScreen,
    HomeworkDetail: HomeworkDetail
  },
  {
    // initialRouteName: "HomeworkDetail",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "white"
    }
  }
));

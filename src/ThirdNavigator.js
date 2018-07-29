import { createStackNavigator } from "react-navigation";
import ProfileScreen from "./ProfileScreen"
import SettingScreen from "./SettingScreen"

export default (HomeNavigator = createStackNavigator(
  {
    ProfileScreen: ProfileScreen,
    SettingScreen: SettingScreen
  },
  {
    initialRouteName: "ProfileScreen",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
));

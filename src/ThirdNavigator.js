import { createStackNavigator } from "react-navigation";
import MineScreen from "./MineScreen";
import SettingScreen from "./SettingScreen";
import ProfileScreen from "./ProfileScreen";
import PersonPageScreen from "./PersonPageScreen";

export default (HomeNavigator = createStackNavigator(
  {
    Mine: MineScreen,
    Setting: SettingScreen,
    Profile: ProfileScreen,
    PersonPage: PersonPageScreen
  },
  {
    initialRouteName: "Mine",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
));

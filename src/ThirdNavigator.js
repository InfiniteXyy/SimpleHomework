import { createStackNavigator } from "react-navigation";
import MineScreen from "./screens/MineScreen";
import SettingScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PersonPageScreen from "./screens/PersonPageScreen";

export default (HomeNavigator = createStackNavigator(
  {
    Mine: MineScreen,
    Setting: SettingScreen,
    Profile: ProfileScreen,
    PersonPage: PersonPageScreen
  },
  {
    // initialRouteName: "PersonPage",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
));

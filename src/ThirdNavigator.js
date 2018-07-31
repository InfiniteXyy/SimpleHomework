import { createStackNavigator } from "react-navigation";
import MineScreen from "./screens/MineScreen";
import SettingScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PersonPageScreen from "./screens/PersonPageScreen";
import ThemeChoose from "./modals/ThemeChoose";

const ThirdNavigator = createStackNavigator(
  {
    Mine: MineScreen,
    Setting: SettingScreen,
    Profile: ProfileScreen,
    PersonPage: PersonPageScreen,
    ThemeChoose: ThemeChoose
  },
  {
    //initialRouteName: "ThemeChoose",
    headerMode: "none",
    mode: "card",
    cardStyle: {
      backgroundColor: "#fafafa"
    }
  }
);
export default ThirdNavigator;

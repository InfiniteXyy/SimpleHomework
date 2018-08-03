import { createStackNavigator } from "react-navigation";
import { themeColor } from "../static";
import { Mine, PersonPage, Profile, ThemeChoose, Setting } from "../screens";

const ThirdNavigator = createStackNavigator(
  {
    Mine: Mine,
    Setting: Setting,
    Profile: Profile,
    PersonPage: PersonPage,
    ThemeChoose: ThemeChoose
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
export default ThirdNavigator;
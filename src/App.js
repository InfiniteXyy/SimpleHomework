import React from "react";
import { themeColor } from "./static";
import { createStackNavigator } from "react-navigation";

import { CourseAdd, HomeworkAdd } from "./modals";
import { MainStack } from "./routes/MainStack";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "1"
    };
  }
  render() {
    return <RootStack screenProps={this.state} />;
  }
}

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    HomeworkAdd: HomeworkAdd,
    CourseAdd: CourseAdd,
  },
  {
    // initialRouteName: "Main",
    headerMode: "none",
    mode: "modal",
    cardStyle: {
      backgroundColor: themeColor.backgroundColor
    },
  }
);

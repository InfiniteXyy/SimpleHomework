import React from "react";
import { themeColor } from "./global";
import { createStackNavigator } from "react-navigation";

import { CourseAdd, HomeworkAdd } from "./modals";
import { MainStack } from "./routes/MainStack";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "1"
    };
    console.ignoredYellowBox = ["Remote debugger"];
  }
  render() {
    return <MainStack screenProps={this.state} />;
  }
}

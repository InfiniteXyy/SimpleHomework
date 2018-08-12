import React from "react";
import { MainStack } from "./routes/MainStack";
import FlashMessage from "react-native-flash-message/src/FlashMessage";
import { View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "1"
    };
    console.ignoredYellowBox = ["Remote debugger"];
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainStack screenProps={this.state} />
        <FlashMessage position="top" />
      </View>
    );
  }
}

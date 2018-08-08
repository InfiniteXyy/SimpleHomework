import React from "react";
import { View, Text } from "react-native";
import gStyles from "../global/styles";
import StackHeader from "../shared/StackHeader";

export default class HomeworkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homework: props.navigation.getParam("homework")
    };
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          rightTitle={"保存"}
          onPressLeft={() => this.props.navigation.goBack()}
        />

        <Text>{this.state.homework.content}</Text>
      </View>
    );
  }
}

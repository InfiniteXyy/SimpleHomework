import React from "react";
import { View } from "react-native";
import gStyles from "../global/styles";
import StackHeader from "../shared/StackHeader";

export default class HomeworkDetail extends React.Component {
  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle={"作业"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

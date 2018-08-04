import React from "react";
import { ScrollView, View } from "react-native";
import gStyles from "../static/styles";
import StackHeader from "../shared/StackHeader";
import MyTextInput from "../shared/MyTextInput";
import { themeColor } from "../static";

export default class CourseAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          rightTitle={"添加"}
          onPressLeft={this.goBack}
          onPressRight={() => alert(this.state.content)}
        />
        <View style={{ marginHorizontal: 24 }}>
          <MyTextInput
            style={{
              fontSize: 36,
              color: themeColor.primaryText,
              marginTop: 80
            }}
            placeholder="课程名..."
            returnKeyType="done"
            onChangeText={text => {
              this.setState({ content: text });
            }}
          />
        </View>
      </View>
    );
  }
}

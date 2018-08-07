import React from "react";
import { View } from "react-native";
import gStyles from "../global/styles";
import StackHeader from "../shared/StackHeader";
import MyTextInput from "../shared/MyTextInput";
import { themeColor } from "../global";
import realm from "../global/realm";

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
          onPressRight={this.addCourse}
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

  addCourse = () => {
    let title = this.state.content.trim();
    if (title.length === 0) {
      alert("请输入正确的名字");
    } else {
      if (realm.objectForPrimaryKey("Course", title)) {
        alert("课程已存在");
      } else {
        realm.write(() => {
          realm.create("Course", { title });
        });
        this.goBack();
      }
    }
  };
}

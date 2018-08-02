import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import {
  ModalTitle,
  ModalIcon,
  ModalMoreHint
} from "../components/ModalElements";
import MyTextInput from "../components/MyTextInput";

export default class CourseAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: ""
    };
  }

  _goBack = () => {
    this.props.navigation.goBack();
  };

  _onChangeContent = text => {
    this.setState({ courseName: text });
  };

  render() {
    return (
      <View style={styles.simpleContainer}>
        <View style={styles.modalClose}>
          <Icon
            size={24}
            name="close"
            color={colors.icon}
            onPress={this._goBack}
          />
        </View>
        <ModalTitle title="创建新的课程" />
        <View style={{ marginHorizontal: 45 }}>
          <View style={styles.TextInputBox}>
            <MyTextInput
              placeholder="内容..."
              returnKeyType="done"
              onChangeText={this._onChangeContent}
            />
          </View>
          <ModalMoreHint />
          <View style={{ marginTop: 72, alignSelf: "center" }}>
            <ModalIcon
              name="check"
              type="feather"
              color={colors.blue}
              onClick={() => alert(this.state.courseName)}
            />
          </View>
        </View>
      </View>
    );
  }
}

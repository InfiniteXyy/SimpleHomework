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
  _goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalClose}>
          <Icon
            size={24}
            name="close"
            color={colors.icon}
            onPress={this._goBack}
          />
        </View>
        <ModalTitle title="创建新的课程" />
        <View style={{ width: 285, marginTop: 48 }}>
          <MyTextInput placeholder="这节课叫..."/>
        </View>
        <ModalMoreHint />
        <View style={{ marginTop: 190 }}>
          <ModalIcon name="check" type="feather" color={colors.blue} />
        </View>
      </View>
    );
  }
}

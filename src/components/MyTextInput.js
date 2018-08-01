import React, { Component } from "react";
import { Platform, TextInput } from "react-native";
import { TextField } from "react-native-material-textfield";

class MyTextInput extends Component {
  shouldComponentUpdate(nextProps) {
    return Platform.OS !== "ios" || this.props.value === nextProps.value;
  }
  render() {
    return <TextInput {...this.props} style={{fontSize: 18}} underlineColorAndroid="transparent" />;
  }
}

export default MyTextInput;

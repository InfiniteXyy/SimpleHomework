import React from "react";
import { Platform, TextInput } from "react-native";

class MyTextInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return Platform.OS !== "ios" || this.props.value === nextProps.value;
  }
  render() {
    return <TextInput {...this.props} underlineColorAndroid="transparent" />;
  }
}

export default MyTextInput;

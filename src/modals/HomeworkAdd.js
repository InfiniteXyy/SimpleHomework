import React from "react";
import { View, StyleSheet } from "react-native";
import gStyles from "../static/styles";
import StackHeader from "../shared/StackHeader";
import MyTextInput from "../shared/MyTextInput";
import { themeColor } from "../static";

export default class HomeworkAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  buttons = [
    { icon: { type: "", name: "" }, title: "", onClick: () => {} },
    { icon: { type: "", name: "" }, title: "", onClick: () => {} }
  ];

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          rightTitle={"保存"}
          onPressLeft={this.goBack}
          onPressRight={() => alert(this.state.content)}
        />
        <View style={styles.mainContainer}>
          <MyTextInput
            style={{ fontSize: 36, color: themeColor.primaryText }}
            placeholder="作业内容..."
            returnKeyType="done"
            onChangeText={text => {
              this.setState({ content: text });
            }}
          />
          <View style={styles.buttonContainer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 24,
    marginTop: 80
  },
  buttonContainer: {
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

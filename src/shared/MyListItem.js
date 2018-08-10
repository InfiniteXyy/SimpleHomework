import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import propTypes from "prop-types";
import { themeColor } from "../global";
import gStyles from "../global/styles";

export default class MyListItem extends React.PureComponent {
  static propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    onPressRight: propTypes.func,
    needBottom: propTypes.bool,
    rightIconVisible: propTypes.bool
  };
  static defaultProps = {
    needBottom: true,
    onPressRight: () => {},
    rightIconVisible: true
  };

  render() {
    let borderBottomWidth = this.props.needBottom ? 2 : 0;
    return (
      <View style={[styles.container, { borderBottomWidth }]}>
        {this.textGroupLeft()}
        {this.buttonRight()}
      </View>
    );
  }
  textGroupLeft = () => {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.content}>{this.props.content}</Text>
      </View>
    );
  };

  buttonRight = () => {
    if (!this.props.rightIconVisible) return <View/>
    return (
      <View style={gStyles.rightIconContainer}>
        <Icon
          containerStyle={{padding: 10}}
          onPress={this.props.onPressRight}
          name={"edit"}
          type={"feather"}
          color={themeColor.inactiveIcon}
          size={20}
        />
      </View>
    );
  };
}

const styles = {
  container: {
    height: 83,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: "#FAFAFA"
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: themeColor.secondaryText
  },
  content: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "500",
    color: themeColor.primaryText
  }
};

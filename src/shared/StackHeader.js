import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { themeColor, gStyles } from "../static";
import { Icon } from "react-native-elements";
import propTypes from "prop-types";

export default class StackHeader extends React.PureComponent {
  static propTypes = {
    onPressLeft: propTypes.func,
    onPressRight: propTypes.func,
    leftTitle: propTypes.string,
    rightTitle: propTypes.string
  };

  static defaultProps = {
    onPressLeft: () => {},
    onPressRight: () => {},
    leftTitle: "返回"
  };

  render() {
    let { onPressLeft, onPressRight, leftTitle, rightTitle } = this.props;
    let rightContent = <View />;
    if (rightTitle) {
      rightContent = (
        <View style={gStyles.rightIconContainer}>
          <TouchableOpacity onPress={onPressRight}>
            <Text style={styles.subtitle}>{rightTitle}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLeft}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="ios-arrow-back"
              type="ionicon"
              size={25}
              color={themeColor.primaryText}
            />
            <Text style={styles.title}>{leftTitle}</Text>
          </View>
        </TouchableOpacity>
        {rightContent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    marginHorizontal: 16,
    height: 63,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  subtitle: {
    marginRight: 12,
    fontSize: 24,
    fontWeight: "600",
    color: themeColor.secondaryText
  },
  title: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "600",
    color: themeColor.primaryText
  }
});

import React from "react";
import { View, Text, Animated, StyleSheet, Platform } from "react-native";
import propTypes from "prop-types";
import { themeColor } from "../global";
import { Icon } from "react-native-elements";
import gStyles from "../global/styles";

export default class ToolbarView extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    onClick: propTypes.func,
    scrollY: propTypes.object
  };
  static defaultProps = {
    onClick: () => {}
  };

  render() {
    let opacity = this.props.scrollY.interpolate({
      inputRange: [20, 70],
      outputRange: [0, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });

    return (
      <Animated.View style={[styles.toolbarContainer, { opacity: opacity }]}>
        <Text style={styles.toolbarTitle}>{this.props.title}</Text>
        <View style={gStyles.rightIconContainer}>
          <Icon
            name="dehaze"
            type="material"
            color={themeColor.activeIcon}
            size={20}
            underlayColor={themeColor.backgroundColor}
            onPress={this.props.onClick}
          />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  toolbarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 44 : 56,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themeColor.backgroundColor,
    borderBottomColor: "#b2b2b2",
    borderBottomWidth: 0.5
  },
  toolbarTitle: {
    fontSize: 20,
    color: themeColor.primaryText,
    fontWeight: "bold"
  }
});

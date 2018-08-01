import React from "react";
import { Animated, StyleSheet, Text, View, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../static";

class Toolbar extends React.PureComponent {
  render() {
    const opacity = this.props.scrollY.interpolate({
      inputRange: [20, 70],
      outputRange: [0, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
    return (
      <Animated.View style={[styles.toolbarContainer, { opacity: opacity }]}>
        <Text style={{ fontSize: 20, color: colors.black, fontWeight: "bold" }}>
          {this.props.title}
        </Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Icon name="dehaze" type="material" color={colors.icon} size={20} />
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
    backgroundColor: "#fafafa",
    borderBottomColor: "#b2b2b2",
    borderBottomWidth: 0.5
  }
});
export { Toolbar };

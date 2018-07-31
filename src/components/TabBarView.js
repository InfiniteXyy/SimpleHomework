import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated
} from "react-native";

const INDICATOR_HEIGHT = 3;

export default class TabBarView extends React.PureComponent {
  _renderTab = (name, page, isTabActive, onPressHandler) => {
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        key={name}
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, this.props.tabStyle]}>
          <Text style={{ color: "#4a4a4a", fontSize: 14, fontWeight: "bold" }}>
            {name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: "absolute",
      width: containerWidth / numberOfTabs,
      bottom: -INDICATOR_HEIGHT,
      justifyContent: "center",
      alignItems: "center"
    };
    const left = {
      transform: [
        {
          translateX: this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs]
          })
        }
      ]
    };
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map(tab => {
          const isTabActive = false;
          const renderTab = this._renderTab;
          return renderTab(
            tab.name,
            tab.page,
            isTabActive,
            this.props.goToPage
          );
        })}
        <Animated.View
          style={[tabUnderlineStyle, left, this.props.underlineStyle]}
        >
          <View
            style={{
              height: INDICATOR_HEIGHT,
              width: 40,
              backgroundColor: "#0398ff"
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tabs: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderBottomColor: "#fafafa",
    borderBottomWidth: INDICATOR_HEIGHT
  }
});

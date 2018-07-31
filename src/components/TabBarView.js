import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";

const INDICATOR_HEIGHT = 3;

export default class TabBarView extends React.PureComponent {
  _renderTab = (name, page, isTabActive, onPressHandler) => {
    console.log(name, page, isTabActive);
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        key={name}
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, this.props.tabStyle]}>
          <Text style={{ color: "#4a4a4a", fontSize: 14 }}>{name}</Text>
        </View>
      </TouchableOpacity>
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
      <View
        style={[
          styles.tabs,
          { backgroundColor: this.props.backgroundColor },
          this.props.style
        ]}
      >
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this._renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
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
    borderBottomColor: "#fafafa",
    borderBottomWidth: INDICATOR_HEIGHT
  }
});
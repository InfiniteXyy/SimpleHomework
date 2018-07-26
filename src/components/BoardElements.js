import React from "react";
import { Text, View, StyleSheet } from "react-native";

class DashboardHeader extends React.Component {
  render() {
    return (
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardTitle}>{this.props.title}</Text>
        <Text style={styles.dashboardSubtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dashboardHeader: {
    height: 115,
    paddingLeft: 36,
    paddingTop: 18,
  },
  dashboardTitle: {
    fontSize: 48,
    fontWeight: "400",
    color: "#9B9B9B"
  },
  dashboardSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#CCCCCC"
  },
});

export { DashboardHeader };

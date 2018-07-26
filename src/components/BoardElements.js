import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-elements/src/icons/Icon";

class DashboardHeader extends React.PureComponent {
  render() {
    let type = this.props.iconType ? this.props.iconType : "material";
    let name = this.props.iconName ? this.props.iconName : "dehaze";
    let onClick = this.props.onClick
      ? this.props.onClick
      : () => {
          alert("no method");
        };
    return (
      <View style={styles.container}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardTitle}>{this.props.title}</Text>
          <Text style={styles.dashboardSubtitle}>{this.props.subtitle}</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <Icon
            onPress={onClick}
            type={type}
            name={name}
            size={24}
            color="#cccccc"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 36
  },
  dashboardHeader: {
    height: 115,
    paddingLeft: 36,
    paddingTop: 18
  },
  dashboardTitle: {
    fontSize: 48,
    fontWeight: "400",
    color: "#4A4A4A"
  },
  dashboardSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9b9b9b"
  }
});

export { DashboardHeader };

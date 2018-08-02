import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-elements/src/icons/Icon";
import { colors } from '../static'
import propTypes from "prop-types";

class DashboardHeader extends React.PureComponent {
  static propTypes = {
    iconType: propTypes.string,
    iconName: propTypes.string,
    padding: propTypes.number,
    onClick: propTypes.func
  };

  static defaultProps = {
    iconType: "material",
    iconName: "dehaze",
    padding: 0,
    onClick: () => {
      alert("no method");
    }
  };
  render() {
    let type = this.props.iconType;
    let name = this.props.iconName;
    let padding = 36 - this.props.padding;
    let onClick = this.props.onClick;

    return (
      <View style={[styles.container, { paddingHorizontal: padding }]}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardTitle}>{this.props.title}</Text>
          <Text style={styles.dashboardSubtitle}>{this.props.subtitle}</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <Icon
            onPress={onClick}
            underlayColor={colors.rice}
            type={type}
            name={name}
            size={24}
            color={colors.icon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row"
  },
  dashboardHeader: {
    height: 115,
    paddingTop: 18
  },
  dashboardTitle: {
    fontSize: 48,
    fontWeight: "400",
    color: "#4A4A4A"
  },
  dashboardSubtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#9b9b9b"
  }
});

export { DashboardHeader };

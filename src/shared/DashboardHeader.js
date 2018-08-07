import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";
import { Icon } from "react-native-elements";
import { themeColor } from "../global";

export default class DashboardHeader extends React.PureComponent {
  static propTypes = {
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    iconType: propTypes.string,
    iconName: propTypes.string
  };

  static defaultProps = {
    iconType: "material",
    iconName: "dehaze"
  };

  render() {
    let { title, subtitle, onClick, iconType, iconName } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <Icon
            onPress={onClick}
            underlayColor={themeColor.backgroundColor}
            type={iconType}
            name={iconName}
            size={24}
            color={themeColor.activeIcon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingVertical: 16,
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 48,
    fontWeight: "400",
    color: themeColor.primaryText
  },
  subtitleStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: themeColor.secondaryText
  }
});

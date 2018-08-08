import React from "react";
import propTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { themeColor } from "../global";
import gStyles from "../global/styles";

export default class BorderHeader extends React.PureComponent {
  static propTypes = {
    onPressRight: propTypes.func,
    onPressLeft: propTypes.func,
    rightTitle: propTypes.string
  };

  static defaultProps = {
    onPressLeft: () => {},
    onPressRight: () => {},
    rightTitle: "保存"
  };

  render() {
    let { onPressLeft, onPressRight, rightTitle } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLeft}>
          <Icon
            containerStyle={{padding: 6}}
            name="md-close"
            type="ionicon"
            size={30}
            color={themeColor.secondaryText}
          />
        </TouchableOpacity>
        <View style={gStyles.rightIconContainer}>
          <TouchableOpacity onPress={onPressRight}>
            <Text style={styles.subtitle}>{rightTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    alignSelf: "flex-start",
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
};

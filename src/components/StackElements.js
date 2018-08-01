import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, styles } from "../static";
import { Icon } from "react-native-elements";

class StackHeader extends React.PureComponent {
  static defaultProps = {
    onPressLeft: () => {},
    onPressRight: () => {},
    leftTitle: "返回"
  };

  render() {
    let left = this.props.onPressLeft;
    let right = this.props.onPressRight;
    let leftTitle = this.props.leftTitle;
    let rightTitle = this.props.rightTitle;

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={left}>
          <View style={styles.leftButtonContainer}>
            <Icon
              name="ios-arrow-back"
              type="ionicon"
              size={25}
              color={colors.black}
            />
            <Text style={styles.title}>{leftTitle}</Text>
          </View>
        </TouchableOpacity>
        {rightTitle ? (
          <TouchableOpacity onPress={right} style={styles.rightTitleContainer}>
            <Text style={styles.subtitle}>{rightTitle}</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export { StackHeader };

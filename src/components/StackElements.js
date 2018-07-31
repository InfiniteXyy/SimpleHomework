import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, styles } from "../static";
import { Icon } from "react-native-elements";

class StackHeader extends React.PureComponent {
  render() {
    let defaultFun = () => {};
    let left = this.props.onPressLeft ? this.props.onPressLeft : defaultFun;
    let right = this.props.onPressRight ? this.props.onPressRight : defaultFun;
    let leftTitle = this.props.leftTitle ? this.props.leftTitle : "返回";
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
          <View style={styles.rightTitleContainer}>
            <Text style={styles.subtitle}>{rightTitle}</Text>
          </View>
        ) : (
          <View />
        )}}
      </View>
    );
  }
}

export { StackHeader };

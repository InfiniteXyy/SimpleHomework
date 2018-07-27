import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { colors } from "../static";
import { Icon } from "react-native-elements";

class ModalTitle extends React.PureComponent {
  render() {
    return <Text style={styles.modalTitle}>{this.props.title}</Text>;
  }
}

class ModalIcon extends React.PureComponent {
  render() {
    return (
      <Icon
        style={styles.circleIcon}
        name={this.props.name}
        type={this.props.type}
        color={this.props.color}
        reverse
        size={21}
      />
    );
  }
}

class ModalMoreHint extends React.PureComponent {
  render() {
    return (
      <View style={styles.moreOption}>
        <Icon name="plus" type="entypo" color={colors.gray} size={14} />
        <Text style={{ color: colors.gray, fontSize: 14, marginLeft: 6 }}>
          自定义更多选项
        </Text>
      </View>
    );
  }
}

export { ModalTitle, ModalIcon, ModalMoreHint };

const styles = StyleSheet.create({
  modalTitle: {
    marginTop: 17,
    fontSize: 20,
    color: "#4A4A4A"
  },
  circleIcon: {
    marginLeft: 28
  },
  moreOption: {
    marginTop: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
